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
                .then(function(response) {
                    // login failed because the user with these credentials do  not exist
                    if (response.status === 401) {
                        loginFailed();
                        // login successful
                    } else if (response.status === 200) {
                        loginSuccessful();
                        // if there is another error that isn't because of the
                        // login credentials being incorrect then there is a different
                        // reason that login failed
                    } else {
                        loginFailedUnknown();
                    }
                })
        }
    }

    // if login successful, update link to profile page
    function loginSuccessful() {
        alert($username.val() + " logged in!");
        console.log($username.val() + " logged in");
        window.location.href = '../profile/profile.template.client.html';
    }

    function loginFailed() {
        alert("User does not exist.");
    }

    function loginFailedUnknown() {
        alert("Login Failed.");
    }
})();