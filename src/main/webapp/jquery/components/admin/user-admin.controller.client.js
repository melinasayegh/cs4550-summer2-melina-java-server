//IIFE
(function () {

    $(main);

    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $emailFld;

    var $removeBtn, $editBtn, $createBtn;
    var $userRowTemplate, $tbody;

    // this is the user-input row
    var template;

    var userService = new UserServiceClient();



    function init() {
        userService.findAllUsers()
            .then(renderUsers);
    }
    init();


    //
    function main() {
        tbody = $('tbody');
        template = $('.template');
        $('#createUser').click(createUser);
        $('#deleteUser').click(deleteUser());
        $('#updateUser').click(updateUser());

        // need select user too

        findAllUsers();
    }

    // retrieve all users and passes response to renderUsers
    function findAllUsers() {
        var url = "/api/user";
        fetch(url)
            .then(function(response) {
                return response.json();
            });
    }

    function renderUsers(users) {
        console.log(users);

        var tbody = $('tbody');
        tbody.empty();
        for (var i=0; i<users.length; i++) {
            var user = users[i];

            var tr = $('<tr>');
            var td = $('<td>');

            td.append(user.username);
            tr.append(td);

            td = $('<td>');
            td.append(user.password);
            tr.append(td);

            td = $('<td>');
            td.append(user.firstName);
            tr.append(td);

            td = $('<td>');
            td.append(user.lastName);
            tr.append(td);

            td = $('<td>');
            td.append(user.email);
            tr.append(td);

            td = $('<td>');
            td.append(user.role);
            tr.append(td);

            td = $('<td>');
            var deleteBtn = $('<button>DELETE</button>');
            deleteBtn.click(deleteUser);
            deleteBtn.attr('id', user.id);
            td.append(deleteBtn);
            tr.append(td);

            tr.appendTo(tbody);
        }
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
        var role = $('#roleFld').val();

        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role
        };

        userService
            .createUser(user)
            .then(findAllUsers);
    }

    // find user by id
    function findUserById() {
        //
    }

    //
    function updateUser() {
        //
    }

    function deleteUser(event) {
        console.log(event);
        var $button = $(event.currentTarget);
        var id = $button.attr('id');

        userService
            .deleteUser(id)
            .then(function () {
                userService
                    .findAllUsers()
                    .then(renderUsers);
            });
    }

    // User -> void
    // updates the form with the user properties
    function renderUser(user) {
        var clone = template.clone();

        clone.attr('id', user.id);

        clone.find('.delete').click(deleteUser);
        clone.find('.edit').click(editUser);

        clone.find('.username')
            .html(user.username);
        tbody.append(clone);
    }

    function editUser(event) {
        console.log('editUser');
        console.log(event);
    }

})();