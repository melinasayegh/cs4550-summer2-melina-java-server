(function () {

    function init() {

        // this should come from session
        var currentUserId = null;
        var $username, $firstName, $lastName, $updateBtn;

        $username = $("#username");
        $firstName = $("#firstName");
        $lastName = $("#lastName");
        $updateBtn = $("#updateBtn");

        findUserById(7)
            .then(renderUser)
    }

    init();

    function updateUser() {
        var user = {
            firstName: $firstName.val(),
            lastName: $lastName.val()
        }

        fetch("/apu/user/" + currentUser.id, {
            method: 'put',
            body: JSON.stringify(user),
            'credentials' : 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    function renderUser(user) {
        console.log(user);

        currentUser = user;

        $username.val(user.username);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
    }


    function findUserById(userId) {
        return fetch('api/user/' + userId)
            .then(function (response) {
                return repsonse.json();
            })
    }

    function handleRepsonse() {

    }

    fetch('checkLogin')


})
