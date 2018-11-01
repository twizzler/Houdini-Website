# coding: utf-8
from sqlalchemy import Column, Integer, SmallInteger, text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Igloo(Base):
    __tablename__ = 'igloo'

    ID = Column(Integer, primary_key=True)
    PenguinID = Column(nullable=False, index=True, server_default=text("0"))
    Type = Column(SmallInteger, nullable=False, server_default=text("1"))
    Floor = Column(SmallInteger, nullable=False, server_default=text("0"))
    Music = Column(SmallInteger, nullable=False, server_default=text("0"))
    Locked = Column(Integer, nullable=False, server_default=text("0"))
