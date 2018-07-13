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

        $loginBtn.click(login);
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
        }).then(loginSuccessful)
    }


    // if login successful
    function loginSuccessful() {
        alert($username + "logged in!")
        console.log(username);
        console.log("go to profile page");
        window.location.href = '../profile/profile.template.client.html';
    }

    function loginFailed() {

        alert("Oops, something's wrong.")
        // if username is not in database
        //if () {
        //    alert("Login Failed - The user is incorrect.")
        //}

        // password is incorrect for the username
        //else if () {
        //    alert("Login Failed - Incorrect password.")
        //} else {
        //    navigateToProfile()
        //}
    }
})();