// IIFE: Immediately Invoked Function Expression

(function () {

    var loginBtn     = $('#loginBtn')
    var usernameFld  = $('#username');
    var passwordFld  = $('#password');

    loginBtn.click(registerHandler);

    function registerHandler() {
        var usernameStr  = usernameFld.val();
        var passwordStr  = passwordFld.val();

        var userObj = {
            username:  usernameStr,
            password:  passwordStr,
        }

        var userObjStr = JSON.stringify(userObj);

        fetch('/api/login', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(navigateToProfile);
    }

    // if login successful
    function navigateToProfile() {
        window.location.href("/../profile/profile.template.client.html")
    }

    function loginFailed() {

        /*
        // if username is not in database
        if () {
            alert("Login Failed - The user is incorrect.")
        }

        // password is incorrect for the username
        else if () {
            alert("Login Failed - Incorrect password.")
        }
        */
    }
})()