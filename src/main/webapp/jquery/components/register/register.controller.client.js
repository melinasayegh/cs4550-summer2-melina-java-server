// IIFE: Immediately Invoked Function Expression

(function () {

    var registerBtn  = $('#registerBtn');
    var loginBtn     = $('#loginBtn');
    var usernameFld  = $('#username');
    var passwordFld  = $('#password');
    var password2Fld = $('#password2');
    var firstNameFld = $('#firstName');
    var lastNameFld  = $('#lastName');
    var emailFld     = $('#email');

    registerBtn.click(registerHandler);
    loginBtn.click(navigateToLogin);

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

        fetch('/api/register', {
            method: 'post',
            body: userObjStr,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(registrationSuccessful, registrationFailed)

    }

    function registrationSuccessful() {
        window.location.href = '../register/register.template.client.html';
    }

    function registrationFailed() {

        // same username as already in database
        //if (usernameFld.val() == "fail") {
        //    alert("Registration Failed - user already exists.");
        //}

        // if passwords don't match
        if (passwordFld.val() !== password2Fld.val()) {
            alert("Registration Failed - Passwords do not match.");
        } else {
            registrationSuccessful()
        }
    }

    function navigateToLogin() {
        console.log("go to login page");
        //window.location.href = ('../login/login.template.client.html');
    }

})()