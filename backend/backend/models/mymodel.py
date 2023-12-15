from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker, relationship
from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
    String,
    DateTime,
    DECIMAL,
    ForeignKey,
    Float
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
    id_user = Column(Integer, primary_key=True)
    nama = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, unique=True)
    password = Column(String(255), nullable=False)
    hashed_password = Column(String(255), nullable=False)
    status = Column(String(255), nullable=False)
    gambar = Column(String(255), nullable=False)
    
    pesanan = relationship("Pesanan", back_populates="user")

Index('user', User.nama, unique=True, mysql_length=255)


class Produk(Base):
    __tablename__ = 'produk'
    id_produk = Column(String(255), primary_key=True)
    kategoriPS = Column(String(255), nullable=False)
    gambar = Column(String(255), nullable=False)
    harga_sewa = Column(Float, nullable=False)
    
    pesanan = relationship("Pesanan", back_populates="produk")

Index('produk', Produk.kategoriPS, unique=True, mysql_length=255)

class Pembayaran(Base):
    __tablename__ = 'pembayaran'

    id_pembayaran = Column(String(50), primary_key=True)
    nama_pembayaran = Column(String(255))
    no_pembayaran = Column(String(100))
    
    pesanan = relationship("Pesanan", back_populates="pembayaran")

class Pesanan(Base):
    __tablename__ = 'pesanan'

    id_pesanan = Column(Integer, primary_key=True, autoincrement=True)
    Status = Column(String(255))
    bukti_transfer = Column(String(255))
    id_produk = Column(String(255), ForeignKey('produk.id_produk'))
    id_user = Column(Integer, ForeignKey('user.id_user'))
    tanggal_booking = Column(DateTime)
    id_pembayaran = Column(String(255), ForeignKey('pembayaran.id_pembayaran'))
    lama_booking = Column(Integer)
    total_harga = Column(Float)
    tipe = Column(String(255))

    produk = relationship("Produk", back_populates="pesanan")
    user = relationship("User", back_populates="pesanan")
    pembayaran = relationship("Pembayaran", back_populates="pesanan")