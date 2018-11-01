# coding: utf-8
from sqlalchemy import Column, DateTime, Integer, SmallInteger, String, text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class User(Base):
    __tablename__ = 'penguin'

    ID = Column(Integer, primary_key=True)
    Username = Column(String(12), nullable=False, unique=True)
    Nickname = Column(String(12), nullable=False)
    Approval = Column(Integer, nullable=False, server_default=text("0"))
    Password = Column(String(255), nullable=False)
    LoginKey = Column(String(255), server_default=text("''"))
    Email = Column(String(255), nullable=False, index=True)
    RegistrationDate = Column(DateTime, nullable=False, server_default=text("current_timestamp()"))
    Active = Column(Integer, nullable=False, server_default=text("0"))
    LastPaycheck = Column(DateTime, nullable=False, server_default=text("current_timestamp()"))
    MinutesPlayed = Column(Integer, nullable=False, server_default=text("0"))
    Moderator = Column(Integer, nullable=False, server_default=text("0"))
    MascotStamp = Column(SmallInteger, nullable=False, server_default=text("0"))
    Coins = Column(Integer, nullable=False, server_default=text("500"))
    Color = Column(Integer, nullable=False, server_default=text("1"))
    Head = Column(SmallInteger, nullable=False, server_default=text("0"))
    Face = Column(SmallInteger, nullable=False, server_default=text("0"))
    Neck = Column(SmallInteger, nullable=False, server_default=text("0"))
    Body = Column(SmallInteger, nullable=False, server_default=text("0"))
    Hand = Column(SmallInteger, nullable=False, server_default=text("0"))
    Feet = Column(SmallInteger, nullable=False, server_default=text("0"))
    Photo = Column(SmallInteger, nullable=False, server_default=text("0"))
    Flag = Column(SmallInteger, nullable=False, server_default=text("0"))
    Permaban = Column(Integer, nullable=False, server_default=text("0"))
    BookModified = Column(Integer, nullable=False, server_default=text("0"))
    BookColor = Column(Integer, nullable=False, server_default=text("1"))
    BookHighlight = Column(Integer, nullable=False, server_default=text("1"))
    BookPattern = Column(Integer, nullable=False, server_default=text("0"))
    BookIcon = Column(Integer, nullable=False, server_default=text("1"))
    AgentStatus = Column(Integer, nullable=False, server_default=text("0"))
    FieldOpStatus = Column(Integer, nullable=False, server_default=text("0"))
    CareerMedals = Column(Integer, nullable=False, server_default=text("0"))
    AgentMedals = Column(Integer, nullable=False, server_default=text("0"))
    LastFieldOp = Column(DateTime, nullable=False, server_default=text("current_timestamp()"))
    NinjaRank = Column(Integer, nullable=False, server_default=text("0"))
    NinjaProgress = Column(Integer, nullable=False, server_default=text("0"))
    FireNinjaRank = Column(Integer, nullable=False, server_default=text("0"))
    FireNinjaProgress = Column(Integer, nullable=False, server_default=text("0"))
    WaterNinjaRank = Column(Integer, nullable=False, server_default=text("0"))
    WaterNinjaProgress = Column(Integer, nullable=False, server_default=text("0"))
    NinjaMatchesWon = Column(Integer, nullable=False, server_default=text("0"))
    FireMatchesWon = Column(Integer, nullable=False, server_default=text("0"))
    WaterMatchesWon = Column(Integer, nullable=False, server_default=text("0"))