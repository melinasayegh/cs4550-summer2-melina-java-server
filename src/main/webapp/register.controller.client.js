// IIFE: Immediately Invoked Function Expression


var registerBtn = jQuery('#registerBtn')
var usernameFld = $('#username');
var passwordFld = $('#password');
var password2Fld = $('#password2');

registerBtn.click(registerHandler);

function registerHnadler() {
    var usernameStr = usernameFld.val();
    var passwordStr = passwordFld.val();
    var password2Str = password2Fld.val();


    var userObj = {
        username: usernameStr,
        password: passwordStr
    }

    console.log(usernameStr);
    console.log(passwordStr);
    console.log(password2Str);

    alert('register button clicked')
}