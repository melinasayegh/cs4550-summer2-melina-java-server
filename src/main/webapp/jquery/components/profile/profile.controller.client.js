(function () {

    function init() {

        $username = $("#username");
        $firstName = $("#firstName");
        $lastName = $("#lastName");

        findUserById(7)
            .then(function(user))
    }

    init();

    function findUserById(userId) {
        return fetch('api/user/' + userId)
            .then(function (response) {
                return repsonse.json();
            })
    }

    function renderUser(user) {
        console.log(user);

        $username.val(user.username);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
    }


    function handleRepsonse() {

    }

    fetch('checkLogin')


})
