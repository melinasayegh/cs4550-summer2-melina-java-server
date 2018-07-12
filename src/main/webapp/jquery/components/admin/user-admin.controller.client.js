//IIFE
(function () {

    var $usernameStr, $passwordStr;
    var $firstNameStr, $lastNameStr, $emailStr, $dobStr, $roleStr;

    var $removeBtn, $editBtn, $createBtn, $updateBtn;
    var $userRowTemplate, $tbody;

    // this is the user-input row
    var $template;

    var userService = new UserServiceClient();



    function init() {

        $tbody = $('#tbody');
        $template = $('#template');

        $createBtn   = $('#createBtn');
        $updateBtn   = $('#updateBtn');

        $usernameStr = $('#usernameFld');
        $passwordStr = $('#passwordFld');
        $firstNameStr = $('#firstNameFld');
        $lastNameStr = $('#lastNameFld');
        $emailStr = $('#emailFld');
        $dobStr = $('#dobFld');
        $roleStr = $('#roleFld');

        userService.findAllUsers()
            .then(renderUsers);

        $createBtn.click(createUser);
        $updateBtn.click(updateUser);
    }
    init();


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
            td.append(user.dateOfBirth);
            tr.append(td);

            td = $('<td>');
            td.append(user.role);
            tr.append(td);

            td = $('<td>');
            var editBtn = $('<button class="fa-2x fa fa-pencil edit"></button>');
            var deleteBtn = $('<button class="fa-2x fa fa-times  remove"></button>');

            deleteBtn.click(deleteUser);
            deleteBtn.attr('id', user.id);

            editBtn.click(editUser);
            editBtn.attr('id', user.id);

            td.append(deleteBtn);
            td.append(editBtn);
            tr.append(td);

            tr.appendTo(tbody);
        }
    }

    // create user: creates user object
    // reads from form elements
    // updates the list of users on server response
    function createUser() {
        console.log('createUser');
        alert('Creating User');

        var user = {
            username: $usernameStr.val(),
            password: $passwordStr.val(),
            firstName: $firstNameStr.val(),
            lastName: $lastNameStr.val(),
            email: $emailStr.val(),
            role: $roleStr.val()
        };

        userService.createUser(user)
            .then(function () {
            userService
                .findAllUsers()
                .then(renderUsers);
        });
    }

    // update the user
    function updateUser() {
        console.log('updateUser');
        alert('Updating User');

        var $button = $(event.currentTarget);
        var id = $button.attr('id');



        var user = {
            username: $usernameStr.val(),
            password: $passwordStr.val(),
            firstName: $firstNameStr.val(),
            lastName: $lastNameStr.val(),
            email: $emailStr.val(),
            role: $roleStr.val()
        };

/*
        userService.updateUser(user)
            .then(function () {
            userService
                .findAllUsers()
                .then(renderUsers);
        });
*/
    }


    function deleteUser(event) {
        console.log(event);
        alert("delete user")
        var $button = $(event.currentTarget);
        var id = $button.attr('id');

        var url = "/api/user/" + id;
        fetch(url, {
            method:'delete'
        }).then(function () {
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

    // edit the user
    // get this row id and populate the first row with this data
    function editUser(event) {
        console.log('editUser');
        console.log(event);

        var $button = $(event.currentTarget);
        var id = $button.attr('id');



        userService.findUserById(id).then(
            function (user) {

                //var editThisUser = new User(user);

                $usernameStr.value = user.username;
                $lastNameStr = user.lastName;
                $firstNameStr = user.firstName;
                $lastNameStr = user.lastName;
                $emailStr = user.email;
                $dobStr = user.dateOfBirth;
                $roleStr = user.role;
            }
        );
    }

})();