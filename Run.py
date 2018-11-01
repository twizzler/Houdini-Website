from Routes.Home import home
from Routes.Create import create
from Routes.Panel import panel
from Routes.Avatar import avatar
from Routes.Help import help
from Routes.Community import community
from Routes.Play import play

from Application import app, config, utils

app.register_blueprint(home)
app.register_blueprint(create)
app.register_blueprint(panel)
app.register_blueprint(avatar)
app.register_blueprint(help)
app.register_blueprint(community)
app.register_blueprint(play)

if __name__ == '__main__':
    app.secret_key = config['keys']['app_secret']
    app.register_error_handler(404, utils.page_not_found)
    app.run(host=config['flask']['host'], port=config['flask']['port'],
            debug=config['flask']['debug'], threaded=True)
