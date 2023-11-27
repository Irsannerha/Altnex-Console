from pyramid.view import view_config
from pyramid.response import Response
from sqlalchemy.exc import SQLAlchemyError
from pyramid.httpexceptions import HTTPBadRequest
import jwt
from datetime import datetime, timedelta
from pyramid.httpexceptions import HTTPNotFound
import pymysql
from sqlalchemy.exc import DBAPIError
import json
from ..models.mymodel import DBSession, User
import bcrypt

@view_config(route_name='home', renderer='backend:templates/mytemplate.jinja2')
def my_view(request):
    return {'project': 'backend'}

@view_config(route_name='add_user', request_method='POST', renderer='json')
def register(request):
    try:
        data = request.json_body
        nama = data['nama']
        email = data['email']
        password = data['password']

        # Hashing password sebelum menyimpan ke database
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        new_user = User(nama=nama, email=email, password=password, hashed_password= hashed_password, status= "Member")

        DBSession.add(new_user)
        DBSession.flush()
        DBSession.commit()

        return {"status": "success"}

    except KeyError:
        return HTTPBadRequest(json_body={"status": "error", "message": "Invalid data"})
    except DBAPIError:
        return HTTPBadRequest(json_body={"status": "error", "message": "Database error"})
    
def validate_user(email, password):
    user = get_user_by_email(email)
    if user and check_password(password, user.hashed_password):
        return True
    return False

def get_user_by_email(email):
    user = DBSession.query(User).filter_by(email=email).first()
    if not user:
            return Response('User not found', status=400)
    return user

def check_password(provided_password, stored_password_hash):
    return bcrypt.checkpw(provided_password.encode('utf-8'), stored_password_hash.encode('utf-8'))
    
@view_config(route_name='login', renderer='json', request_method='POST')
def login(request):
    # email = request.json_body.get('email')
    # password = request.json_body.get('password')    
             
    try:
        email = request.json_body.get('email')
        password = request.json_body.get('password')
        
        if not email or not password:
            return Response('Missing email or password', status=400) 
        
        if not validate_user(email, password):
            return HTTPBadRequest(json_body={'message': 'Invalid username or password'})

        # Buat token
        expiration = datetime.utcnow() + timedelta(hours=1)
        payload = {"email": email, "exp": expiration}
        token = jwt.encode(payload, "qwert123", algorithm="HS256")

        return {'token': token}
    
    except SQLAlchemyError as e:
        return Response('Database error: ' + str(e), status=500)