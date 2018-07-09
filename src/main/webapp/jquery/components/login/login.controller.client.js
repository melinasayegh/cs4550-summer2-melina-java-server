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

        fetch('/api/register', {
            method: 'post',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(registrationSuccessful, registrationFailed);
    }

    function registrationSuccessful() {
        alert("You have been logged in.")
        window.location.href("/../components/profile/profile.template.client.html");
    }

    function registrationFailed() {

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