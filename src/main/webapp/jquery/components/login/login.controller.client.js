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

    // log in
    function login() {

        if ($username.val() === "" && $password.val() === "") {
            alert("Please enter a username and a password.");
        }

        else if ($username.val() === "") {
            alert("Please enter your username.");
        }

        else if ($password.val() === "") {
            alert("Please enter your password.");
        }

        else {
            var user = {
                "username": $username.val(),
                "password": $password.val()
            };

            var userObjStr = JSON.stringify(user);

            userService.login(userObjStr)
                .then(loginSuccessful)
        }
    }

    // if login successful, update link to profile page
    function loginSuccessful() {
        alert($username.val() + " logged in!");
        console.log($username.val() + " logged in");
        window.location.href = '../profile/profile.template.client.html';
    }
})();