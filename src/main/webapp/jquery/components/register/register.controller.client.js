// IIFE: Immediately Invoked Function Expression

(function () {

    var registerBtn  = $('#registerBtn');
    var loginBtn     = $('#loginBtn');
    var usernameFld  = $('#username');
    var passwordFld  = $('#password');
    var password2Fld = $('#password2');

    registerBtn.click(registerHandler);
    loginBtn.click(navigateToLogin);

    function registerHandler() {
        var usernameStr = usernameFld.val();
        var passwordStr = passwordFld.val();
        var password2Str = password2Fld.val();

        var userObj = {
            username: usernameStr,
            password: passwordStr
        };

        var userObjStr = JSON.stringify(userObj);

        fetch('/register', {
            method: 'post',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            },
            'credentials': 'include'
        }).then(registrationSuccessful(userObjStr), registrationFailed(userObjStr))

    }

    function registrationSuccessful(userObjStr) {
        console.log("registration successful");
        window.location.href = '/jquery/components/profile/profile.template.client.html';
    }

    function registrationFailed(userObjStr) {

        // same username as already in database
        //if (usernameFld.val() == "fail") {
        //    alert("Registration Failed - user already exists.");
        //}

        // if passwords don't match
        if (passwordFld.val() !== password2Fld.val()) {
            alert("Registration Failed - Passwords do not match.");
        } else {
            registrationSuccessful(userObjStr)
        }
    }

    function navigateToLogin() {
        console.log("Pushed login");
        window.location.href = '/jquery/components/login/login.template.client.html';
    }

})()