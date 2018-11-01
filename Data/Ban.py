# coding: utf-8
from sqlalchemy import Column, DateTime, ForeignKey, Integer, Text, text
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()


class Ban(Base):
    __tablename__ = 'ban'

    PenguinID = Column(ForeignKey(u'penguin.ID', ondelete=u'CASCADE', onupdate=u'CASCADE'), primary_key=True, nullable=False)
    Issued = Column(DateTime, primary_key=True, nullable=False, server_default=text("current_timestamp()"))
    Expires = Column(DateTime, primary_key=True, nullable=False, server_default=text("current_timestamp()"))
    ModeratorID = Column(ForeignKey(u'penguin.ID', ondelete=u'CASCADE', onupdate=u'CASCADE'), nullable=False, index=True)
    Reason = Column(Integer, nullable=False)
    Comment = Column(Text)
