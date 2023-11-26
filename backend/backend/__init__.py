from pyramid.config import Configurator
from pyramid.events import NewRequest
from sqlalchemy import engine_from_config
from .models.mymodel import DBSession

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    
    with Configurator(settings=settings) as config:
        config.include('pyramid_jinja2')
        engine = engine_from_config(settings, 'sqlalchemy.')
        DBSession.configure(bind=engine)
        config.add_route('add_user', '/api/register', request_method="POST")
        config.add_route('masuk', '/api/login', request_method="POST")
        config.include('.routes')
        config.scan()
    return config.make_wsgi_app()
