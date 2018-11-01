from flask import Flask
from flask_sqlalchemy_session import flask_scoped_session

from flask_recaptcha import ReCaptcha

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from Classes.Utils import Utils
from Classes.Config import Config
from Classes.Player import Player
from Classes.Database import Database

app = Flask(__name__)

config = Config(app).build_configuration()
Config(app).set_flask_config(config)

recaptcha = ReCaptcha(app=app)
recaptcha.init_app(app)

engine = create_engine("mysql://%s:%s@%s/%s" % (config["database"]["user"],
                                                config["database"]["pass"],
                                                config["database"]["host"],
                                                config["database"]["name"]))

sessionFactory = sessionmaker(bind=engine)
session = flask_scoped_session(sessionFactory, app)

utils = Utils(config)
database = Database(session)
player = Player()
