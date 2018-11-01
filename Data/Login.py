# coding: utf-8
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Login(Base):
    __tablename__ = 'login'

    ID = Column(Integer, primary_key=True)
    PenguinID = Column(ForeignKey(u'penguin.ID', ondelete=u'CASCADE', onupdate=u'CASCADE'), nullable=False, index=True)
    Date = Column(DateTime, nullable=False, server_default=text("current_timestamp()"))
    IPAddress = Column(String(255), nullable=False)