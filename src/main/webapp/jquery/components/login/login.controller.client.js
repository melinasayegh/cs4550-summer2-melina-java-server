// IIFE: Immediately Invoked Function Expression

(function () {
    var $username,
        $password,
        $loginBtn,
        $registerBtn;

    function init() {
        $username    = $('#username');
        $password    = $('#password');
        $loginBtn    = $('#loginBtn');
        $registerBtn = $('#registerBtn');

        $loginBtn.click(login());
        $registerBtn.click(navigateToRegister());
    }
    init();

    function login() {
        var user = {
            "username": $username.val(),
            "password": $password.val()
        };

        var userObjStr = JSON.stringify(user);


        fetch('/api/login', {
            method: 'post',
            body: userObjStr,
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(loginSuccessful(userObjStr), loginFailed());
    }


    // if login successful
    function navigateToProfile(userObjStr) {
        window.location.href = '/jquery/components/profile/profile.template.client.html';
    }

    /*
    function loginFailed() {

        // if username is not in database
        if () {
            alert("Login Failed - The user is incorrect.")
        }

        // password is incorrect for the username
        else if () {
            alert("Login Failed - Incorrect password.")
        } else {
            navigateToProfile()
        }
    }
    */

    function navigateToRegister() {
        window.location.href = '/components/register/register.template.client.html';
    }

})();