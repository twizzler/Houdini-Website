from flask import Blueprint
from flask import request, render_template

from Application import config, utils, database
import requests
import json

create = Blueprint('create', __name__, template_folder='templates')


class Create(object):
    @staticmethod
    @create.route('/create', methods=['GET', 'POST'])
    def create_index():
        details = {'success': '', 'error': ''}

        if request.method == 'POST':
            on_click = request.form['on']
            post_value = request.form['value'] if 'value' in request.form else None

            if on_click == 'username_click_':
                username_exists = database.username_exists(post_value)

                if len(post_value) < 4 or len(post_value) > 13:
                    details['error'] = 'Username is too short or too long.'

                elif username_exists:
                    details['error'] = 'Username already in use.'

                elif not config["register"]["allowed_chars"].match(post_value):
                    details['error'] = 'Incorrect username, pick another one.'

                else:
                    details['success'] = 'Username available !'

            elif on_click == 'password_click_':
                if len(post_value) < 4 or len(post_value) > 32:
                    details['error'] = 'Password too short or too long.'

                else:
                    details['success'] = 'Password accepted !'

            elif on_click == 'email_click_':
                if len(post_value) < 5 or len(post_value) > 50:
                    details['error'] = 'Email too short or too long.'

                elif database.email_exists(post_value):
                    details['error'] = 'Email already in use.'

                else:
                    details['success'] = 'Email available !'

            elif on_click == 'form_submit__':
                username = request.form['value[name]']
                email = request.form['value[mail]']
                password = request.form['value[pass]']
                color = request.form['value[color]']
                captcha_response = request.form['value[recaptcha]']

                if not ReCaptcha(captcha_response).is_human():
                    details['error'] = 'You have not completed the recaptcha! <a href="#">Click  here to refresh !</a>'
                    return utils.send_output(details)

                bcrypt_password = utils.generate_bcrypt_password(password)

                database.add_user(username, bcrypt_password, email, color)

                details['success'] = 'Penguin successfully created !'

            return utils.send_output(details)

        return render_template('create/index.html')


class ReCaptcha():
    def __init__(self, response):
        self.response = response

    def is_human(self):
        secret = config['recaptcha']['recaptcha_secret_key']
        payload = {'response': self.response, 'secret': secret}
        response = requests.post("https://www.google.com/recaptcha/api/siteverify", payload)
        response_text = json.loads(response.text)
        return response_text['success']
