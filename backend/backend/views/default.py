from pyramid.view import view_config
from pyramid.response import Response
from sqlalchemy.exc import SQLAlchemyError
from pyramid.httpexceptions import HTTPBadRequest
from ..models.mymodel import User
from sqlalchemy.exc import DBAPIError
import json
from ..models.mymodel import DBSession
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