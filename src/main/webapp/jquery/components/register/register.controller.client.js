// IIFE: Immediately Invoked Function Expression

(function () {

    var registerBtn  = $('#registerBtn');
    var usernameFld  = $('#username');
    var passwordFld  = $('#password');
    var password2Fld = $('#password2');
    var firstNameFld = $('#firstName');
    var lastNameFld  = $('#lastName');
    var emailFld     = $('#email');

    registerBtn.click(registerHandler);

    function registerHandler() {
        var usernameStr = usernameFld.val();
        var passwordStr = passwordFld.val();
        var password2Str = password2Fld.val();
        var firstNameStr = firstNameFld.val();
        var lastNameStr = lastNameFld.val();
        var emailStr = emailFld.val();

        var userObj = {
            username:  usernameStr,
            password:  passwordStr,
            firstName: firstNameStr,
            lastName:  lastNameStr,
            email:     emailStr
        };

        var userObjStr = JSON.stringify(userObj);

        if (passwordStr == password2Str) {
            fetch('/api/register', {
                method: 'post',
                body: userObjStr,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(registrationSuccessful)
        } else {
            alert("Registration Failed - Passwords do not match.");
        }
    }

    function registrationSuccessful() {
        alert("Registration Successful!")
        window.location.href = '../profile/profile.template.client.html';
    }

})()