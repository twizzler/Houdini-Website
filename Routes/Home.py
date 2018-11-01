from flask import Blueprint
from flask import render_template

home = Blueprint('home', __name__, template_folder='templates')


class Home(object):
    @staticmethod
    @home.route('/', methods=['GET', 'POST'])
    def index():
        return render_template('index.html')
