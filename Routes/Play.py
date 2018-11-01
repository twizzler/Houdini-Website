from flask import Blueprint, render_template

play = Blueprint('play', __name__, template_folder='templates')


class Play(object):
    @staticmethod
    @play.route('/play', methods=['GET', 'POST'])
    def play_index():
        return render_template('play/index.html')

    @staticmethod
    @play.route('/play/login', methods=['GET', 'POST'])
    def play_login():
        return render_template('play/login.html')
