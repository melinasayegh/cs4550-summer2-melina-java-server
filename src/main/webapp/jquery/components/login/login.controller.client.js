// IIFE: Immediately Invoked Function Expression

(function () {
    var $username,
        $password,
        $loginBtn,
        $registerBtn;

    var userService = new UserServiceClient();

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

        userService.login(userObjStr)
            .then(loginSuccessful)
    }


    // if login successful
    function loginSuccessful() {
        alert($username.val() + " logged in!");
        console.log($username.val() + " logged in");
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