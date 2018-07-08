//IIFE
(function () {

    $(main);

    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $emailFld;
    var $removeBtn, $editBtn, $createBtn;
    var $userRowTemplate, $tbody;
    var template;
    var userService = new AdminUserServiceClient();


    //
    function main() {
        tbody = $('tbody');
        template = $('.template');
        $('#createUser').click(createUser);

        // need delete user
        // need update user
        // need select user

        findAllUsers();
    }

    // create user: creates user object
    // reads from form elements
    // updates the list of users on server response
    function createUser() {
        console.log('createUser');

        var username = $('#usernameFld').val();
        var password = $('#passwordFld').val();
        var firstName = $('#firstNameFld').val();
        var lastName = $('#lastNameFld').val();
        var email = $('#emailFld').val();

        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email
        };

        userService
            .createUser(user)
            .then(findAllUsers);
    }


    // retrieve all users and passes response to renderUsers
    function findAllUsers() {
        userService
            .findAllUsers()
            .then(renderUsers);
    }

    // find user by id
    function findUserById() {
        //
    }

    //
    function updateUser() {
        //
    }

    // sends delete request to server
    function deleteUser(event) {
        var deleteBtn = $(event.currentTarget);
        var userId = deleteBtn
            .parent()
            .parent()
            .attr('id');

        userService
            .deleteUser(userId)
            .then(findAllUsers);
    }

    // User -> void
    // updates the form with the user properties
    function renderUser(user) {
        //
    }

    // [User] -> void
    // clears current content of table body
    // iterated over array of users
    // clones a table row template for each instance
    function renderUsers(users) {
        tbody.empty();
        for(var i=0; i<users.length; i++) {
            var user = users[i];
            var clone = template.clone();

            clone.attr('id', user.id);

            clone.find('.delete').click(deleteUser);
            clone.find('.edit').click(editUser);

            clone.find('.username')
                .html(user.username);
            tbody.append(clone);
        }
    }


    function editUser(event) {
        console.log('editUser');
        console.log(event);
    }

})();