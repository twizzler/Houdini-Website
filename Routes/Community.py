from flask import Blueprint

community = Blueprint('community', __name__, template_folder='templates')


class Community(object):
    @staticmethod
    @community.route('/community', methods=['GET', 'POST'])
    def community_index():
        return ''
