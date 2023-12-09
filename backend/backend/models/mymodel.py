from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
    String
)

from .meta import Base
Base = declarative_base()
DBSession = scoped_session(sessionmaker())
class MyModel(Base):
    __tablename__ = 'models'
    id = Column(Integer, primary_key=True)
    name = Column(Text)
    value = Column(Integer)


Index('my_index', MyModel.name, unique=True, mysql_length=255)

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    nama = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, unique=True)
    password = Column(String(255), nullable=False)
    hashed_password = Column(String(255), nullable=False)
    status = Column(String(255), nullable=False)
    gambar = Column(String(255), nullable=False)

Index('user', User.nama, unique=True, mysql_length=255)


class Produk(Base):
    __tablename__ = 'produk'
    id_produk = Column(String(255), primary_key=True)
    kategoriPS = Column(String(255), nullable=False)
    gambar = Column(String(255), nullable=False)

Index('produk', Produk.kategoriPS, unique=True, mysql_length=255)