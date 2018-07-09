// IIFE: Immediately Invoked Function Expression

(function () {

    var registerBtn  = $('#registerBtn')
    var usernameFld  = $('#username');
    var passwordFld  = $('#password');
    var password2Fld = $('#password2');
    var emailFld     = $('#email');
    var firstNameFld = $('#firstName');
    var lastNameFld  = $('#lastName');



    registerBtn.click(registerHandler);

    function registerHandler() {
        var usernameStr  = usernameFld.val();
        var passwordStr  = passwordFld.val();
        var password2Str = password2Fld.val();
        var firstNameStr = firstNameFld.val();
        var lastNameStr  = lastNameFld.val();
        var emailStr     = emailFld.val();

        var userObj = {
            username:  usernameStr,
            password:  passwordStr,
            firstName: firstNameStr,
            lastName:  lastNameStr,
            email:     emailStr
        }

        var userObjStr = JSON.stringify(userObj);

        fetch('/api/register', {
            method: 'post',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    function confirmPasswords() {
        // if passwords don't match
        if (passwordFld !== password2Fld) {
            // then don't create an account
            // error message
            alert('Passwords do not match.')
        // if passwords do match
        } else {
            //continue
        }

    }
})()