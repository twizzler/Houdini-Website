import requests
import os

from flask import Blueprint, request, send_file
from Application import session
from Data.User import User

from PIL import Image

from StringIO import StringIO


avatar = Blueprint('avatar', __name__, template_folder='templates')


class Avatar(object):
    @staticmethod
    @avatar.route('/<path:m>/crossdomain.xml', methods=['GET'])
    @avatar.route('/crossdomain.xml', methods=['GET'])
    def handle_crossdomain():
        return '<cross-domain-policy><allow-access-from domain="*"/></cross-domain-policy>'

    @staticmethod
    @avatar.route("/avatar/<id>/cp", methods=['GET'])
    def get_avatar(id):
        available_sizes = [60, 88, 95, 120, 300, 600]
        user = session.query(User).filter_by(ID=id).first()
        size = 120

        try:
            if 'size' in request.args:
                size = int(request.args.get("size"))
                size = size if size in available_sizes else 120
        except KeyError:
            pass

        details = [user.Photo, user.Color, user.Head, user.Face, user.Neck, user.Body, user.Hand,
                   user.Feet, user.Flag]
        if details is None:
            return False

        items = Avatar().initialize_image(list(map(int, details)), size)

        return send_file(Avatar().build_avatar(items), mimetype='image/png')

    @staticmethod
    def download_image(image, size=120):
        path = 'http://icer.ink/mobcdn.clubpenguin.com/game/items/images/paper/image/{}/{}.png'.format(size, image)

        print('Downloading...', path)

        dimg = requests.get(path)
        image_p = 'Avatar/paper/{}/{}.png'.format(size, image)

        p = '/'.join(image_p.split('/')[:-1])
        if not os.path.exists(p):
            os.makedirs(p)

        sprite = Image.open(StringIO(dimg.content))
        sprite.save(image_p)

        return sprite

    def initialize_image(self, items, size=120):
        path = 'Avatar/paper/{}/{}.png'.format(size, '{}')

        sprites = list()

        for i in items:
            if i == 0:
                sprites.append(Image.new('RGBA', (size, size), (0, 0, 0, 0)))
                continue

            if not os.path.exists(path.format(i)):
                sprites.append(self.download_image(i, size))
            else:
                sprite = Image.open(path.format(i))
                sprites.append(sprite)

        return sprites

    @staticmethod
    def build_avatar(images):
        avatar = images[0]
        for i in images[1:]:
            avatar.paste(i, (0, 0), i)

        avatar_io = StringIO()
        avatar.save(avatar_io, 'PNG', quality=100)
        avatar_io.seek(0)

        return avatar_io
