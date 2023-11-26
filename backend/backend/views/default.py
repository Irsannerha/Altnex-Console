from pyramid.view import view_config
import json
import pymysql

@view_config(route_name='home', renderer='backend:templates/mytemplate.jinja2')
def my_view(request):
    return {'project': 'backend'}

@view_config(route_name='add_user', request_method='POST', renderer='json')
def register(request):
    conn = pymysql.connect(host='localhost', user='root', password='', db='altnex')
    cursor = conn.cursor()
    user_data = request.json_body
    cursor.execute("SELECT MAX(id) FROM user")
    max_id = cursor.fetchone()[0]
    new_id = max_id + 1 if max_id else 1
        
    insert_query = """
    INSERT INTO user (id, nama, email, password) VALUES (%s, %s, %s, %s)
    """
    cursor.execute(insert_query, (new_id, user_data['nama'], user_data['email'], user_data['password']))
    conn.commit()
        
    # Tutup koneksi ke database
    cursor.close()
    conn.close()
    return {'status': 'success', 'User': {'id': new_id, **user_data}}