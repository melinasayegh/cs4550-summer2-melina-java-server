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

    var userService = new UserServiceClient();

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


        // if passwords don't match, don't register
        if (passwordStr != password2Str) {
            alert("Registration Failed - Passwords do not match.");
        }

        // if username field is blank, don't register
        else if (usernameStr == "") {
            alert("Registration Failed - Please create a username.");

        }

        // if password field is blank, don't register
        else if (passwordStr == "") {
            alert("Registration Failed - Please set a password.");
        }

        else {
            userService.register(userObjStr)
                .then(registrationSuccessful)
        }
    }

    function registrationSuccessful() {
        alert("Registration Successful!")
        window.location.href = '../profile/profile.template.client.html';
    }

})()