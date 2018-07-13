(function () {

    var $username, $password;
    var $firstName, $lastName, $phone, $email, $role, $dob;
    var $updateBtn;// $logoutBtn;
    // this should come from the session
    var currentUser = null;

    var userService = new UserServiceClient();

    function init() {

        $username = $("#userNameFld");
        $password = $("#passwordFld");
        $lastName = $("#lastNameFld");
        $phone = $("#phoneFld");
        $email = $("#emailFld");
        $role = $("#roleFld");
        $dob = $("#dobFld");

        $updateBtn = $("#updateBtn");
        //$logoutBtn = $("#loginBtn");

        $updateBtn.click(updateUser);

        profile()
            .then(renderUser)
    }
    init();

    function profile() {
        return fetch('/api/profile', {
            method: 'get',
            credentials: 'include'
        })
            .then(function (response) {
                return response.json();
            });
    }


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

        var userObjStr = JSON.stringify(user);

        fetch('/api/profile', {
            method: 'put',
            body: userObjStr,
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    function logout() {
        fetch('/api/logout', {
            method: 'post',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
    }

})();
