import bcrypt

from flask import Blueprint, request, render_template, redirect, url_for, flash
from Application import utils, player, database

from validate_email import validate_email

panel = Blueprint('panel', __name__, template_folder='templates')


class Panel(object):
    @staticmethod
    @panel.route('/panel', methods=['GET', 'POST'])
    def panel_index():
        login_output = {
            'success': False, 'error_username': False,
            'error_password': False, 'message': ''
        }

        if player.validate_session():
            player.set_player()
            return redirect(url_for('panel.panel_dashboard'))

        if request.method == 'POST':
            username_input = request.form['username']
            password_input = request.form['password']

            user = database.fetch('user', filter_by=username_input)

            if user is not None:
                flash_client_hash = utils.bcrypt_password(password_input).encode('utf-8')
                database_password = user.Password

                if not bcrypt.checkpw(flash_client_hash.encode('utf-8'),
                                      database_password.encode('utf-8')):

                    login_output['error_password'] = True
                    login_output['message'] = 'You have entered an incorrect password.'

                    return utils.send_output(login_output)

                player.create_user_session(user.ID, user.Username, user.Email)

                login_output['success'] = True
                return utils.send_output(login_output)

            else:
                login_output['success'] = False
                login_output['message'] = 'BOTH'

                return utils.send_output(login_output)

        return render_template('panel/index.html')

    @staticmethod
    @panel.route('/panel/dashboard', methods=['GET', 'POST'])
    def panel_dashboard():
        if not player.validate_session():
            return redirect(url_for('panel.panel_index'))

        try:
            user = database.fetch('user')
            login = database.fetch('login')
            ban = database.fetch('ban')
        except Exception as e:
            print("-> Catched MySQL error, gone away (?)\n")
            print(str(e))

            database.session.commit()

        user_data = {'user': user, 'login': login, 'ban': ban}

        if request.method == 'POST':
            response = {'success': False, 'message': ''}

            if request.form['action'] == 'Change Password':
                password = request.form['password']
                new_password = request.form['new_password']

                if password != new_password:
                    response['success'] = False
                    response['message'] = 'Passwords don\'t match.'

                    return utils.send_output(response)

                elif len(password) < 4:
                    response['success'] = False
                    response['message'] = 'Password too short.'

                    return utils.send_output(response)

                elif len(password) > 24:
                    response['success'] = False
                    response['message'] = 'Password too long.'

                    return utils.send_output(response)

                password = utils.generate_bcrypt_password(password)
                database.change_password(password)

                response['success'] = True
                response['message'] = 'You have successfully changed your password.'
                return utils.send_output(response)

            elif request.form['action'] == 'Change Email':
                email = request.form['email']
                new_email = request.form['new_email']
                is_valid = validate_email(email)

                if not is_valid:
                    response['success'] = False
                    response['message'] = 'Email invalid.'

                    return utils.send_output(response)

                elif email != new_email:
                    response['success'] = False
                    response['message'] = 'Emails don\'t match.'

                    return utils.send_output(response)

                elif database.email_exists(email):
                    response['success'] = False
                    response['message'] = 'Email already in use.'

                    return utils.send_output(response)

                database.change_email(email)

                response['success'] = True
                response['message'] = 'You have successfully changed your email.'
                return utils.send_output(response)

        return render_template('panel/dashboard.html', user_data=user_data)

    @staticmethod
    @panel.route('/panel/logout', methods=['GET', 'POST'])
    def panel_logout():
        player.destroy_session()

        flash('You have successfully logged out !')
        return redirect(url_for('panel.panel_index'))
