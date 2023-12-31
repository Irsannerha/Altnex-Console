from pyramid.config import Configurator
from pyramid.events import NewRequest
from sqlalchemy import engine_from_config
from .models.mymodel import DBSession, Base
from pyramid.authorization import ACLAuthorizationPolicy
from pyramid_jwt.policy import JWTAuthenticationPolicy
from pyramid.session import SignedCookieSessionFactory

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    
    with Configurator(settings=settings) as config:
        config.include('pyramid_jinja2')
        engine = engine_from_config(settings, 'sqlalchemy.')
        DBSession.configure(bind=engine)
        Base.metadata.bind = engine
        config.add_request_method(
        lambda request: DBSession(), 
        'dbsession',
        reify=True
        )
        authn_policy = JWTAuthenticationPolicy('qwert123', http_header='Authorization')
        authz_policy = ACLAuthorizationPolicy()
        config.set_authentication_policy(authn_policy)
        config.set_authorization_policy(authz_policy)
        my_session_factory = SignedCookieSessionFactory('itsaseekreet')
        config.set_session_factory(my_session_factory)
        config.add_route('add_user', '/api/register', request_method="POST")
        config.add_route('login', '/api/login', request_method='POST')
        config.add_route('forgot_password', '/api/forgot_password', request_method='POST')
        config.add_route('new_password', '/api/new_password', request_method='POST')
        config.add_route('save_product', '/api/save_product', request_method='POST')
        config.add_route('get_products', '/api/get_products',  request_method='GET')
        config.add_route('save_admin', '/api/save_admin', request_method='POST')
        config.add_route('get_admin', '/api/get_admin',  request_method='GET')
        config.add_route('get_user', '/api/get_user',  request_method='GET')
        config.add_route('hapus_admin', '/api/hapus_admin', request_method='DELETE')
        config.add_route('hapus_user', '/api/hapus_user', request_method='DELETE')
        config.add_route('get_member', '/api/get_member', request_method='GET')
        config.add_route('hapus_produk', '/api/hapus_produk', request_method='DELETE')
        config.add_route('get_ps5', '/api/get_ps5',  request_method='GET')
        config.add_route('get_ps4', '/api/get_ps4',  request_method='GET')
        config.add_route('get_ps3', '/api/get_ps3',  request_method='GET')
        config.add_route('get_products_specifics', '/api/get_products/{id_produk}', request_method='GET')
        config.add_route('create_order', '/api/create_order', request_method='POST')
        config.add_route('get_pesanan', '/api/get_pesanan', request_method='GET')
        config.add_route('get_pesanan_specific', '/api/get_pesanan/{id_user}', request_method='GET')
        config.add_route('detail_pesanan', '/api/detail_pesanan/{id_pesanan}', request_method='GET')
        config.add_route('update_status_pesanan', '/api/update_status_pesanan/{id_pesanan}', request_method='PUT')
        config.add_route('upload_bukti_pembayaran', '/api/upload_bukti_pembayaran/{id_pesanan}', request_method='POST')
        config.add_route('update_user', '/api/update_user', request_method='POST')
        config.add_route('update_produk', '/api/update_produk', request_method='POST')
        config.add_route('total_members', '/api/total_members',  request_method='GET')
        config.add_route('total_admins', '/api/total_admins',  request_method='GET')
        config.add_route('total_products', '/api/total_products',  request_method='GET')
        config.add_route('total_harga_per_bulan', '/api/total_harga_per_bulan',  request_method='GET')
        config.include('.routes')
        config.scan()
    return config.make_wsgi_app()
