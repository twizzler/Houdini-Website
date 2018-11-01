# coding: utf-8
from sqlalchemy import Column, DateTime, Integer, SmallInteger, String, text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Postcard(Base):
    __tablename__ = 'postcard'

    ID = Column(Integer, primary_key=True)
    SenderID = Column(nullable=True, index=True)
    RecipientID = Column(nullable=False, index=True)
    Type = Column(SmallInteger, nullable=False)
    SendDate = Column(DateTime, nullable=False, server_default=text("current_timestamp()"))
    Details = Column(String(255), nullable=False, server_default=text("''"))
    HasRead = Column(Integer, nullable=False, server_default=text("0"))