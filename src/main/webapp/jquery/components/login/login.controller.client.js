// IIFE: Immediately Invoked Function Expression

(function () {
    var $username,
        $password,
        $loginBtn;

    function init() {
        $username = $('#username');
        $password = $('#password');
        $loginBtn = $('#loginBtn');

        $loginBtn.click(login);
    }
    init();

    function login() {
        var user = {
            'username': $username.val(),
            "password": $password.val()
        };
        fetch('/api/login', {
            method: 'post',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
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
})();