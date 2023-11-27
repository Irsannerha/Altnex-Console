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
        # hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        new_user = User(nama=nama, email=email, password=password)

        DBSession.add(new_user)
        DBSession.flush()
        DBSession.commit()

        return {"status": "success"}

    except KeyError:
        return HTTPBadRequest(json_body={"status": "error", "message": "Invalid data"})
    except DBAPIError:
        return HTTPBadRequest(json_body={"status": "error", "message": "Database error"})
    
@view_config(route_name='login', renderer='json', request_method='POST')
def login(request):
    email = request.json_body.get('email')
    password = request.json_body.get('password')
    
    if not email or not password:
        return Response('Missing email or password', status=400)
    
    try:
        # Gunakan DBSession untuk query
        user = DBSession.query(User).filter(User.email == email).first()

        if not user:
            return Response('User not found', status=400)

        # Buat token
        expiration = datetime.utcnow() + timedelta(hours=1)
        payload = {"email": email, "exp": expiration}
        token = jwt.encode(payload, "qwert123", algorithm="HS256")

        return {'token': token}
    
    except SQLAlchemyError as e:
        # Tangani error SQLAlchemy jika ada
        return Response('Database error: ' + str(e), status=500)