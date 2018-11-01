import hashlib
import json
import bcrypt

from flask import render_template


class Utils:
    def __init__(self, config):
        self.config = config

    def generate_bcrypt_password(self, password):
        gen_password = hashlib.md5(password.encode('utf-8')).hexdigest().upper()
        flash_client_hash = self.get_login_hash(gen_password, self.config['keys']['static_key'])
        bcrypt_password = bcrypt.hashpw(flash_client_hash, bcrypt.gensalt(12))

        return bcrypt_password

    def bcrypt_password(self, password):
        uppercased_hash = hashlib.md5(password.encode('utf-8')).hexdigest().upper()
        flash_client_hash = self.get_login_hash(uppercased_hash, self.config['keys']['static_key'])

        return flash_client_hash

    @staticmethod
    def send_output(output):
        return json.dumps(output)

    @staticmethod
    def encrypt_password(password, md5=True):
        if md5 is not False:
            password = hashlib.md5(password.encode('utf-8')).hexdigest()

        pass_hash = password[16:32] + password[0:16]
        return pass_hash

    def get_login_hash(self, password, static_key):
        pass_hash = self.encrypt_password(password, False)
        pass_hash += static_key
        pass_hash += 'Y(02.>\'H}t":E1'
        pass_hash = self.encrypt_password(pass_hash)

        return pass_hash

    @staticmethod
    def page_not_found(error):
        return render_template('404.html'), 404
