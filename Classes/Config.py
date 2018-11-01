import re


class Config:
    def __init__(self, app):
        self.app = app
        self.config = {}

        self.build_configuration()

    def build_configuration(self):
        self.config['flask'] = {
            'host': 'localhost',
            'port': 8000,
            'debug': True
        }
        self.config['database'] = {
            'host': 'localhost',
            'user': 'root',
            'pass': 'zalman',
            'name': 'houdini'
        }
        self.config['keys'] = {
            'app_secret': 'k>zTwQ|6>*b-YA=',
            'static_key': 'houdini'
        }
        self.config['recaptcha'] = {
            'recaptcha_enabled': True,
            'recaptcha_site_key': '',
            'recaptcha_secret_key': ''
        }
        self.config["register"] = {
            "allowed_chars": re.compile(r"^[^<>/{}[\]~`]*$")
        }

        return self.config
