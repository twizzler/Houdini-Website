$(function () {
   $('#accountManager').submit(function (e) {
       const usernameInp = $('#usernameInput');
       const passwordInp = $('#passwordInput');

       $.post('/panel', $(this).serialize(), function (data) {
           if (!data.success) {
               if (data.message == 'BOTH') {
                   showAlert('username', 'Username is incorrect.');
                   showAlert('password', 'Password is incorrect.');
               } else if (data.error_username) {
                   showAlert('username', data.message);
               } else if (data.error_password) {
                   showAlert('password', data.message);
               } else {
                   console.log('There was an error');
               }
           } else {
               $('#successMessage').fadeIn(200);
               setTimeout(function () {
                   window.location = '/panel/dashboard';
               }, 1500);
           }
       }, 'json');

       usernameInp.focusin(function () {
           hideAlert('username');
       });

       passwordInp.focusin(function () {
           hideAlert('password');
       });
       e.preventDefault();
   });

   $('#changePassword').on('click', function (e) {

       const passwordInp = $('#passwordInput');
       const newPasswordInp = $('#newPasswordInput');

       const formData = $('#passwordChanger').serialize();

       $.post('/panel/dashboard', formData, function (data) {
           if (!data.success) {
               showAlert('password', data.message);
           } else {
               $('#successMessage > span').text(data.message);
               $('#successMessage').fadeIn(200);
               setTimeout(function () {
                   $('#successMessage').fadeOut();
               }, 2500);
           }
       }, 'json');

       passwordInp.focusin(function () {
           hideAlert('password');
       });

       newPasswordInp.focusin(function () {
           hideAlert('password');
       });

       e.preventDefault();
   });

   $('#changeEmail').on('click', function (e) {

       const emailInp = $('#emailInput');
       const newEmailInp = $('#newEmailInput');

       const formData = $('#emailChanger').serialize();

       console.log(formData);

       $.post('/panel/dashboard', formData, function (data) {
           if (!data.success) {
               showAlert('email', data.message);
           } else {
               $('#emailInfo').text(emailInp.val());
               $('#successMessage > span').text(data.message);
               $('#successMessage').fadeIn(200);
               setTimeout(function () {
                   $('#successMessage').fadeOut();
               }, 1500);
           }
       }, 'json');

       emailInp.focusin(function () {
           hideAlert('email');
       });

       newEmailInp.focusin(function () {
           hideAlert('email');
       });

       e.preventDefault();
   });
});

function showAlert(id, msg){
  $('#' + id + 'Error > span').text(msg);
  $('#' + id + 'Error').fadeIn(200);
  $('#' + id + ' > .form-text').attr('class', 'form-text required error');
}

function hideAlert(id){
  $('#' + id + 'Error').fadeOut(200);
  $('#' + id + ' > .form-text').attr('class', 'form-text required');
}
