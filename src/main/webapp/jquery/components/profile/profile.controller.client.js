(function () {

    var $username, $password;
    var $firstName, $lastName, $phone, $email, $role, $dob;
    var $updateBtn, $logoutBtn;
    // this should come from the session
    var currentUser = null;

    var userService = new UserServiceClient();

    function init() {

        $username = $("#userNameFld");
        $password = $("#passwordFld");
        $firstName = $("#firstNameFld");
        $lastName = $("#lastNameFld");
        $phone = $("#phoneFld");
        $email = $("#emailFld");
        $role = $("#roleFld");
        $dob = $("#dobFld");

        $updateBtn = $("#updateBtn");
        $logoutBtn = $("#logoutBtn");

        $updateBtn.click(updateUser);
        $logoutBtn.click(logout);

        // get profile of logged in user and render
        userService.profile()
            .then(renderUser)
    }
    init();

    // render the user, populate input fields with the logged in user
    function renderUser(user) {
        currentUser = user;
        $username.val(user.username);
        $password.val(user.password);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
        $phone.val(user.phone);
        $email.val(user.email);
        $role.val(user.role);
        $dob.val(user.dateOfBirth);
    }

    // PUT
    // update the user with the values of the input fields
    function updateUser() {

        var user = {
            "username": $username.val(),
            "password": $password.val(),
            "firstName": $firstName.val(),
            "lastName": $lastName.val(),
            "phone": $phone.val(),
            "email": $email.val(),
            "role": $role.val(),
            "dateOfBirth": $dob.val()

        };

        currentUser = user;

        var userObjStr = JSON.stringify(user);

        userService.updateProfile(userObjStr)
            .then(function (updatedUser) {
            renderUser(updatedUser);
        })
    }

    // terminate session, logout and navigate to login page
    function logout() {
        userService.logout()
            .then(navigateToLogin)
    }

    // update link, navigate to login page
    function navigateToLogin() {
        window.location.href = '../login/login.template.client.html';
    }
})();