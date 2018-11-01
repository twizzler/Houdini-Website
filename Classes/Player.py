from flask import session


class Player(object):
    def __init__(self):
        self.id = None
        self.username = None
        self.email = None

    def set_player(self):
        if self.validate_session():
            self.id = session['user']['id']
            self.username = session['user']['username']
            self.email = session['user']['username']

    @staticmethod
    def create_user_session(id, username, email):
        session['user'] = {
            'id': id,
            'username': username,
            'email': email
        }

        session['logged_in'] = True

        return True

    @staticmethod
    def validate_session():
        return session.get('user') and session['logged_in']

    @staticmethod
    def destroy_session():
        if session.get('user'):
            session.clear()
