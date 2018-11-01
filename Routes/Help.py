from flask import Blueprint, render_template

help = Blueprint('help', __name__, template_folder='templates')


class Help(object):
    @staticmethod
    @help.route('/help', methods=['GET', 'POST'])
    def help_index():
        return render_template('help.html')
