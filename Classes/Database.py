from Data.User import User
from Data.Login import Login
from Data.Ban import Ban
from Data.Postcard import Postcard
from Data.Igloo import Igloo

from Player import session as player_session
from Classes.Player import Player


class Database(object):
    def __init__(self, session):
        self.session = session
        self.player = Player()

    def fetch(self, table, filter_by=None, data=None, fetch_all=True):
        filter_user = player_session['user']['username'] if filter_by is None else filter_by
        filter_by = player_session['user']['id'] if filter_by is None else filter_by

        if table == 'user':
            user = self.session.query(User).filter_by(Username=filter_user).first()

            return user[data] if not fetch_all else user
        elif table == 'login':
            login = self.session.query(Login).filter_by(PenguinID=filter_by).all()

            return login[data] if not fetch_all else login

        elif table == 'ban':
            ban = self.session.query(Ban).filter_by(PenguinID=filter_by).all()

            return ban[data] if not fetch_all else ban

    def username_exists(self, post_value):
        check_username = self.session.query(
                            self.session.query(User).filter_by(Username=post_value).exists()
                        ).scalar()

        return check_username

    def email_exists(self, post_value):
        check_email = self.session.query(
                            self.session.query(User).filter_by(Email=post_value).exists()
                        ).scalar()

        return check_email

    def add_user(self, username, password, email, color):
        user = User(Username=username, Nickname=username, Password=password, Email=email,
                    Active=1, Color=color)
        self.session.add(user)
        self.session.commit()

        postcard = Postcard(RecipientID=user.ID, Details="", Type=125)
        self.session.add(postcard)

        user.Inventory = color

        igloo = Igloo(PenguinID=user.ID)
        self.session.add(igloo)

        self.session.commit()

    def change_password(self, password):
        user = self.fetch('user')
        user.Password = password

        self.session.commit()

    def change_email(self, email):
        user = self.fetch('user')
        user.Email = email

        self.session.commit()
