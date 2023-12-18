from pyramid.view import view_config
from pyramid.response import Response
from sqlalchemy.exc import SQLAlchemyError
from pyramid.httpexceptions import HTTPBadRequest
import jwt
from datetime import datetime, timedelta
from pyramid.httpexceptions import HTTPNotFound
from sqlalchemy.exc import DBAPIError
import json
from ..models.mymodel import DBSession, User, Produk, Pesanan, Pembayaran
import bcrypt
from sqlalchemy.orm import joinedload
import calendar
from sqlalchemy import extract

@view_config(route_name='home', renderer='backend:templates/mytemplate.jinja2')
def my_view(request):
    return {'project': 'backend'}


@view_config(route_name='save_product', request_method='POST', renderer='json')
def save_product(request):
    try:
        data = request.POST
        id_produk = data['id_produk']
        kategoriPS = data['kategoriPS']
        gambar = request.POST['gambar'].file

        # Simpan file gambar di folder publik
        save_path = f'../src/assets/img/produk/{id_produk}.png'
        with open(save_path, 'wb') as f:
            f.write(gambar.read())

        produk = DBSession.query(Produk).filter(
            Produk.id_produk == id_produk).first()

        if produk:
            return Response('Produk Sudah ada', status=400)

        if kategoriPS == "Playstation 3":
            harga_sewa = 5000
        elif kategoriPS == "Playstation 4":
            harga_sewa = 10000
        elif kategoriPS == "Playstation 5":
            harga_sewa = 15000

        # Simpan path gambar di database
        new_product = Produk(
            id_produk=id_produk,
            kategoriPS=kategoriPS,
            gambar=save_path,
            harga_sewa=harga_sewa
        )

        DBSession.add(new_product)
        DBSession.flush()
        DBSession.commit()

        return {"status": "success"}

    except KeyError:
        return Response('Invalid data', status=400, content_type='application/json')
    except DBAPIError:
        return Response('Database error', status=500, content_type='application/json')


@view_config(route_name='get_products', renderer='json', request_method='GET')
def get_products(request):
    try:
        # Query all products from the database
        products = DBSession.query(Produk).all()

        # Convert the product data to a list of dictionaries
        products_data = [{'id_produk': product.id_produk, 'kategoriPS': product.kategoriPS,
                          'gambar': product.gambar} for product in products]

        # Return the product data as JSON
        return {'products': products_data}

    except Exception as e:
        # Handle any exceptions (e.g., database errors)
        return Response('Error: ' + str(e), status=500)


@view_config(route_name='get_ps5', renderer='json', request_method='GET')
def get_ps5(request):
    try:
        # Query all products from the database
        products = DBSession.query(Produk).filter(
            Produk.kategoriPS == "Playstation 5").all()

        # Convert the product data to a list of dictionaries
        products_data = [{'id_produk': product.id_produk, 'kategoriPS': product.kategoriPS,
                          'gambar': product.gambar, 'harga_sewa': product.harga_sewa} for product in products]

        # Return the product data as JSON
        return {'products': products_data}

    except Exception as e:
        # Handle any exceptions (e.g., database errors)
        return Response('Error: ' + str(e), status=500)


@view_config(route_name='get_ps4', renderer='json', request_method='GET')
def get_ps4(request):
    try:
        # Query all products from the database
        products = DBSession.query(Produk).filter(
            Produk.kategoriPS == "Playstation 4").all()

        # Convert the product data to a list of dictionaries
        products_data = [{'id_produk': product.id_produk, 'kategoriPS': product.kategoriPS,
                          'gambar': product.gambar, 'harga_sewa': product.harga_sewa} for product in products]

        # Return the product data as JSON
        return {'products': products_data}

    except Exception as e:
        # Handle any exceptions (e.g., database errors)
        return Response('Error: ' + str(e), status=500)


@view_config(route_name='get_ps3', renderer='json', request_method='GET')
def get_ps3(request):
    try:
        # Query all products from the database
        products = DBSession.query(Produk).filter(
            Produk.kategoriPS == "Playstation 3").all()

        # Convert the product data to a list of dictionaries
        products_data = [{'id_produk': product.id_produk, 'kategoriPS': product.kategoriPS,
                          'gambar': product.gambar, 'harga_sewa': product.harga_sewa} for product in products]

        # Return the product data as JSON
        return {'products': products_data}

    except Exception as e:
        # Handle any exceptions (e.g., database errors)
        return Response('Error: ' + str(e), status=500)


@view_config(route_name='add_user', request_method='POST', renderer='json')
def register(request):
    try:
        data = request.json_body
        nama = data['nama']
        email = data['email']
        password = data['password']

        # Hashing password sebelum menyimpan ke database
        hashed_password = bcrypt.hashpw(
            password.encode('utf-8'), bcrypt.gensalt())

        user = DBSession.query(User).filter(User.email == email).first()

        if user:
            return Response('Email Sudah ada', status=400)

        new_user = User(nama=nama, email=email, password=password,
                        hashed_password=hashed_password, status="Member")

        DBSession.add(new_user)
        DBSession.flush()
        DBSession.commit()

        return {"status": "success"}

    except KeyError:
        return HTTPBadRequest(json_body={"status": "error", "message": "Invalid data"})
    except DBAPIError:
        return HTTPBadRequest(json_body={"status": "error", "message": "Database error"})


def validate_user(email, password):
    user = DBSession.query(User).filter_by(email=email).first()
    if user and check_password(password, user.hashed_password):
        return user
    return None  # or you could raise an exception or return a specific response


def get_user_by_email(email):
    user = DBSession.query(User).filter_by(email=email).first()
    if not user:
        return Response('User not found', status=400)
    return user


def check_password(provided_password, stored_password_hash):
    return bcrypt.checkpw(provided_password.encode('utf-8'), stored_password_hash.encode('utf-8'))


@view_config(route_name='login', renderer='json', request_method='POST')
def login(request):
    try:
        email = request.json_body.get('email')
        password = request.json_body.get('password')

        if not email or not password:
            return Response('Missing email or password', status=400)

        user = validate_user(email, password)
        if not user:
            return {'message': 'Invalid username or password'}, 400

        # Buat token
        expiration = datetime.utcnow() + timedelta(hours=1)
        payload = {"email": email, "exp": expiration}
        token = jwt.encode(payload, "qwert123", algorithm="HS256")

        return {'token': token}

    except SQLAlchemyError as e:
        return Response('Database error: ' + str(e), status=500)


@view_config(route_name='forgot_password', renderer='json', request_method='POST')
def forgot_password(request):
    try:
        email = request.json_body.get('email')

        # Simpan email ke sesi
        request.session['email_for_password_reset'] = email

        if not email:
            return Response('Missing email', status=400)

        user = DBSession.query(User).filter(User.email == email).first()

        if not user:
            return Response('User not found', status=400)

        return "Email Benar"

    except SQLAlchemyError as e:
        return Response('Database error: ' + str(e), status=500)


@view_config(route_name='new_password', renderer='json', request_method='POST')
def new_password(request):
    try:
        email = request.session.get('email_for_password_reset')
        password = request.json_body.get('password')

        if not email:
            return Response('Session expired or invalid', status=400)

        if not password:
            return Response('Missing new password', status=400)

        user = DBSession.query(User).filter(User.email == email).first()
        user.password = password
        if not user:
            return Response('User not found', status=400)

        hashed_password = bcrypt.hashpw(
            password.encode('utf-8'), bcrypt.gensalt())
        user.hashed_password = hashed_password

        DBSession.add(user)
        DBSession.commit()

        return {'message': 'Password successfully updated'}

    except SQLAlchemyError as e:
        return Response('Database error: ' + str(e), status=500)


@view_config(route_name='save_admin', request_method='POST', renderer='json')
def save_admin(request):
    try:
        data = request.POST
        nama = data['nama']
        email = data['email']
        password = data['password']
        gambar = request.POST['foto'].file

        # Simpan file gambar di folder publik
        save_path = f'../src/assets/img/profile_picture/{nama}.png'
        with open(save_path, 'wb') as f:
            f.write(gambar.read())

        # Hashing password sebelum menyimpan ke database
        hashed_password = bcrypt.hashpw(
            password.encode('utf-8'), bcrypt.gensalt())

        user = DBSession.query(User).filter(User.email == email).first()

        if user:
            return Response('Email Sudah ada', status=400)

        new_user = User(nama=nama, email=email, password=password,
                        hashed_password=hashed_password, status="Admin", gambar=save_path)

        DBSession.add(new_user)
        DBSession.flush()
        DBSession.commit()

        return {"status": "success"}

    except KeyError:
        return HTTPBadRequest(json_body={"status": "error", "message": "Invalid data"})
    except DBAPIError:
        return HTTPBadRequest(json_body={"status": "error", "message": "Database error"})


@view_config(route_name='get_admin', renderer='json', request_method='GET')
def get_admin(request):
    try:
        # Query all products from the database
        admins = DBSession.query(User).filter(User.status == "Admin").all()

        # Convert the product data to a list of dictionaries
        admin_data = [{'id_user': user.id_user, 'foto': user.gambar, 'nama': user.nama,
                       'email': user.email, 'password': user.password} for user in admins]

        # Return the product data as JSON
        return {'admins': admin_data}

    except Exception as e:
        # Handle any exceptions (e.g., database errors)
        return Response('Error: ' + str(e), status=500)


@view_config(route_name='hapus_admin', renderer='json', request_method='DELETE')
def hapus_admin(request):
    try:
        email = request.params.get('email')
        delete_query = DBSession.query(User).filter(
            User.email == email, User.status == 'Admin').first()
        if delete_query:
            DBSession.delete(delete_query)
        else:
            # Handle kasus di mana user tidak ditemukan
            return Response("Email Tidak Ada", status=400)
        DBSession.flush()
        DBSession.commit()

        return {"status": "Success"}

    except KeyError:
        return HTTPBadRequest(json_body={"status": "error", "message": "Invalid data"})
    except DBAPIError:
        return HTTPBadRequest(json_body={"status": "error", "message": "Database error"})


@view_config(route_name='hapus_produk', renderer='json', request_method='DELETE')
def hapus_produk(request):
    try:
        id_produk = request.params.get('id_produk')
        delete_query = DBSession.query(Produk).filter(
            Produk.id_produk == id_produk).first()

        if delete_query:
            DBSession.delete(delete_query)
        else:
            # Handle kasus di mana user tidak ditemukan
            return Response("Produk Tidak Ada", status=400)
        DBSession.flush()
        DBSession.commit()

        return {"status": "Success"}

    except KeyError:
        return HTTPBadRequest(json_body={"status": "error", "message": "Invalid data"})
    except DBAPIError:
        return HTTPBadRequest(json_body={"status": "error", "message": "Database error"})


@view_config(route_name='get_user', renderer='json')
def get_user(request):
    email = request.params.get('email')
    user = DBSession.query(User).filter(User.email == email).first()

    if not user:
        return Response('User not found', status=400)

    # Pastikan semua atribut yang Anda akses ada
    return {'id_user': user.id_user, 'nama':user.nama, 'status': user.status, 'email': user.email, 'gambar': user.gambar}


@view_config(route_name='get_products_specifics', renderer='json', request_method='GET')
def get_products_specifics(request):
    try:
        id_produk = request.matchdict['id_produk']
        products = DBSession.query(Produk).filter(
            Produk.id_produk == id_produk).first()

        if products is None:
            # Produk tidak ditemukan, kembalikan pesan error
            return Response(json_body={'error': 'Product not found'}, status=404)

        # Produk ditemukan, kembalikan detail produk
        return {'id_produk': products.id_produk, 'kategoriPS': products.kategoriPS, 'gambar': products.gambar, 'harga_sewa': products.harga_sewa}

    except Exception as e:
        # Terjadi kesalahan lain, kembalikan pesan error
        return Response(json_body={'error': 'Error: ' + str(e)}, status=500)


@view_config(route_name='create_order', renderer='json', request_method='POST')
def create_order(request):
    try:
        data = request.json_body
        new_order = Pesanan(
            Status="Pending",
            bukti_transfer=data['bukti_transfer'],
            id_produk=data['id_produk'],
            id_user=data['id_user'],
            tanggal_booking=data['tanggal_booking'],
            id_pembayaran=data['id_pembayaran'],
            lama_booking=data['lama_booking'],
            total_harga=data['total_harga'],
            tipe=data['tipe']
        )
        DBSession.add(new_order)
        DBSession.flush()
        DBSession.commit()
        return {'success': True, 'id_pesanan': new_order.id_pesanan}

    except Exception as e:
        return {'success': False, 'error': str(e)}


@view_config(route_name='get_pesanan', renderer='json')
def get_pesanan(request):
    try:
        pesanan_list = DBSession.query(Pesanan)\
            .join(Pesanan.produk)\
            .all()

        pesanan_data = []
        for pesanan in pesanan_list:
            pesanan_data.append({
                'idPesanan': pesanan.id_pesanan,
                'username': pesanan.user.nama,
                'namaProduk': pesanan.produk.kategoriPS,
                'tipeProduk': pesanan.produk.kategoriPS,
                'gambar': pesanan.produk.gambar,
                'buktiTransfer': pesanan.bukti_transfer,
                'tanggalBooking': pesanan.tanggal_booking.isoformat(),
                'lamaBooking': pesanan.lama_booking,
                'totalHarga': pesanan.total_harga,
                'tipe': pesanan.tipe,
                'status': pesanan.Status
            })

        return pesanan_data

    except Exception as e:
        return {'error': str(e)}


@view_config(route_name='get_pesanan_specific', renderer='json')
def get_pesanan_specific(request):
    try:
        id_user = request.matchdict['id_user']
        pesanan_list = DBSession.query(Pesanan).filter(Pesanan.id_user == id_user)\
            .join(Pesanan.produk)\
            .all()

        pesanan_data = []
        for pesanan in pesanan_list:
            pesanan_data.append({
                'idPesanan': pesanan.id_pesanan,
                'username': pesanan.user.nama,
                'namaProduk': pesanan.produk.kategoriPS,
                'tipeProduk': pesanan.produk.kategoriPS,
                'gambar': pesanan.produk.gambar,
                'buktiTransfer': pesanan.bukti_transfer,
                'tanggalBooking': pesanan.tanggal_booking.isoformat(),
                'lamaBooking': pesanan.lama_booking,
                'totalHarga': pesanan.total_harga,
                'tipe': pesanan.tipe,
                'status': pesanan.Status
            })

        return pesanan_data

    except Exception as e:
        return {'error': str(e)}


@view_config(route_name='update_status_pesanan', renderer='json', request_method='PUT')
def update_status_pesanan(request):
    try:
        id_pesanan = request.matchdict['id_pesanan']
        data = request.json_body
        status_baru = data.get('status')

        # Query pesanan berdasarkan id_pesanan
        pesanan = DBSession.query(Pesanan).filter(
            Pesanan.id_pesanan == id_pesanan).first()

        if not pesanan:
            return Response(json.dumps({'error': 'Pesanan tidak ditemukan'}), content_type='application/json', status=404)

        # Update status pesanan
        pesanan.Status = status_baru
        DBSession.add(pesanan)
        DBSession.commit()

        return {'success': True}

    except Exception as e:
        return Response(json.dumps({'error': str(e)}), content_type='application/json', status=500)


@view_config(route_name='detail_pesanan', renderer='json')
def detail_pesanan(request):
    try:
        id_pesanan = request.matchdict['id_pesanan']
        pesanan = DBSession.query(Pesanan)\
            .options(joinedload(Pesanan.user), joinedload(Pesanan.produk), joinedload(Pesanan.pembayaran))\
            .filter(Pesanan.id_pesanan == id_pesanan)\
            .first()

        if pesanan:
            pesanan_data = {
                'idPesanan': pesanan.id_pesanan,
                'username': pesanan.user.nama,
                'namaProduk': pesanan.produk.kategoriPS,
                'tipeProduk': pesanan.produk.kategoriPS,
                'gambar': pesanan.produk.gambar,
                'namaPembayaran': pesanan.pembayaran.nama_pembayaran,
                'noPembayaran': pesanan.pembayaran.no_pembayaran,
                'buktiTransfer': pesanan.bukti_transfer,
                'tanggalBooking': pesanan.tanggal_booking.isoformat(),
                'lamaBooking': pesanan.lama_booking,
                'totalHarga': pesanan.total_harga,
                'tipe': pesanan.tipe,
                'status': pesanan.Status,

            }
            return pesanan_data
        else:
            return {'error': 'Pesanan not found'}

    except ValueError:
        return {'error': 'Invalid id_pesanan format'}
    except Exception as e:
        return {'error': str(e)}


@view_config(route_name='upload_bukti_pembayaran', renderer='json')
def upload_bukti_pembayaran(request):
    try:
        id_pesanan = request.matchdict['id_pesanan']
        pesanan = DBSession.query(Pesanan).filter(Pesanan.id_pesanan == id_pesanan).first()

        if not pesanan:
            return {'success': False, 'error': 'Pesanan tidak ditemukan'}

        if 'gambar' in request.POST:
            input_file = request.POST['gambar'].file
            save_path = f'../src/assets/img/bukti_pembayaran/{id_pesanan}.png'
            with open(save_path, 'wb') as f:
                f.write(input_file.read())
            pesanan.bukti_transfer = save_path

        DBSession.add(pesanan)
        DBSession.flush()
        DBSession.commit()

        return {'success': True}

    except Exception as e:
        return {'success': False, 'error': str(e)}



@view_config(route_name='update_user', renderer='json', request_method='POST')
def update_user(request):
    try:
        id_user = request.params.get('id_user')
        admin = DBSession.query(User).filter(
            User.id_user == id_user).first()
        if not admin:
            return {'error': 'Admin not found'}

        admin.nama = request.POST.get('nama', admin.nama)
        admin.email = request.POST.get('email', admin.email)

        new_password = request.POST.get('password')
        if new_password:
            hashed_password = bcrypt.hashpw(
                new_password.encode('utf-8'), bcrypt.gensalt())
            admin.hashed_password = hashed_password

        if 'foto' in request.POST:
            input_file = request.POST['foto'].file
            save_path = f'../src/assets/img/profile_picture/{admin.nama}.png'
            with open(save_path, 'wb') as f:
                f.write(input_file.read())
            admin.gambar = save_path

        DBSession.add(admin)
        DBSession.flush()
        DBSession.commit()
        return {'success': True, 'message': 'User updated successfully'}
    except Exception as e:
        return {'error': str(e)}


@view_config(route_name='update_produk', renderer='json', request_method='POST')
def update_produk(request):
    try:
        id_produk = request.params.get('id_produk')
        produk = DBSession.query(Produk).filter(Produk.id_produk == id_produk).first()
        if not produk:
            return {'error': 'Produk not found'}

        produk.id_produk = request.POST.get('id_produk', produk.id_produk)
        produk.kategoriPS = request.POST.get('kategoriPS', produk.kategoriPS)

        if 'gambar' in request.POST:
            input_file = request.POST['gambar'].file
            save_path = f'../src/assets/img/produk/{produk.id_produk}.png'
            with open(save_path, 'wb') as f:
                f.write(input_file.read())
            produk.gambar = save_path

        if produk.kategoriPS == "Playstation 3":
            harga_sewa = 5000
        elif produk.kategoriPS == "Playstation 4":
            harga_sewa = 10000
        elif produk.kategoriPS == "Playstation 5":
            harga_sewa = 15000

        produk.harga_sewa = harga_sewa

        DBSession.add(produk)
        DBSession.flush()
        DBSession.commit()
        return {'success': True, 'message': 'Produk updated successfully'}
    except Exception as e:
        return {'error': str(e)}
    

@view_config(route_name='total_members', renderer='json')
def total_members(request):
    total_members = DBSession.query(User).filter(User.status == 'Member').count()
    return {'total_members': total_members}

@view_config(route_name='total_admins', renderer='json')
def total_admins(request):
    total_admins = DBSession.query(User).filter(User.status == 'Admin').count()
    return {'total_admins': total_admins}

@view_config(route_name='total_products', renderer='json')
def total_products(request):
    total_products = DBSession.query(Produk).count()
    return {'total_products': total_products}

@view_config(route_name='total_harga_per_bulan', renderer='json')
def total_harga_per_bulan(request):
    tahun = request.params.get('tahun', 2023)
    total_per_bulan = {month: 0 for month in calendar.month_name[1:]}

    pesanan = DBSession.query(Pesanan).filter(extract('year', Pesanan.tanggal_booking) == tahun)

    for p in pesanan:
        bulan = p.tanggal_booking.strftime('%B')
        total_per_bulan[bulan] += p.total_harga

    return total_per_bulan
