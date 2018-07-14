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

        userService.profile()
            .then(renderUser)
    }
    init();

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

    function logout() {
        userService.logout()
            .then(navigateToLogin)
    }

    function navigateToLogin() {
        alert($username.val() + "logged out!");
        window.location.href = '../login/login.template.client.html';
    }

})();