//IIFE
(function () {

    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $emailFld, $phoneFld, $dobFld, $roleFld;

    var $removeBtn, $editBtn, $createBtn, $updateBtn;
    var $userRowTemplate, $tbody;
    var $selectedUserId;

    // this is the user-input row
    var $template;

    var userService = new UserServiceClient();



    function init() {

        $selectedUserId = null;

        $tbody = $('#tbody');
        $template = $('#template');

        $createBtn   = $('#createBtn');
        $updateBtn   = $('#updateBtn');

        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');
        $emailFld = $('#emailFld');
        $phoneFld = $('#phoneFld')
        $dobFld = $('#dobFld');
        $roleFld = $('#roleFld');

        userService.findAllUsers()
            .then(renderUsers);

        $createBtn.click(createUser);
        $updateBtn.click(updateUser);
    }
    init();

    // render the table with the users in database
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
            td.append("*****");
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
            td.append(user.phone);
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

            editBtn.click(selectUser);
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
        alert('Created User.');

        var user = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstName: $firstNameFld.val(),
            lastName: $lastNameFld.val(),
            email: $emailFld.val(),
            phone: $phoneFld.val(),
            dob: $dobFld.val(),
            role: $roleFld.val()
        };

        userService.createUser(user)
            .then(function () {

                clearFields();

                $selectedUserId = null;

                userService.findAllUsers()
                    .then(renderUsers);
        });
    }

    // update user if it was selected from one of the rows in the table
    function updateUser() {

        var user = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstName: $firstNameFld.val(),
            lastName: $lastNameFld.val(),
            email: $emailFld.val(),
            phone: $phoneFld.val(),
            dob: $dobFld.val(),
            role: $roleFld.val()
        };

        // if the user was not selected from the table then don't update the user
        if ($selectedUserId === null) {
            alert("User was not selected from table. Please select a user again.")

            // if the user was selected from the table, then update the user
        } else {

            console.log('updateUser');
            alert('Updating User');

            userService.updateUser($selectedUserId, user)
                .then(function () {

                    $selectedUserId = null;

                    userService
                        .findAllUsers()
                        .then(renderUsers);

                    clearFields();
                });
        }
    }

    // delete user at row where clicked delete
    function deleteUser(event) {
        console.log(event);
        alert("Deleted user.");
        var $button = $(event.currentTarget);
        var id = $button.attr('id');

        userService.deleteUser(id)
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
        clone.find('.edit').click(selectUser);

        clone.find('.username')
            .html(user.username);
        tbody.append(clone);
    }


    // get this row id and populate the first row (input fields)
    // with this selected user's data
    // disable the username field when the user has been selected
    function selectUser(event) {
        console.log('selectUser');
        console.log(event);

        var $button = $(event.currentTarget);
        $selectedUserId = $button.attr('id');

        userService.findUserById($selectedUserId).then(
            function (user) {
                $usernameFld.val(user.username);
                $passwordFld.val(user.password);
                $firstNameFld.val(user.firstName);
                $lastNameFld.val(user.lastName);
                $emailFld.val(user.email);
                $phoneFld.val(user.phone);
                $dobFld.val(user.dateOfBirth);
                $roleFld.val(user.role);
            }
        );
    }

    // clear the input fields
    function clearFields() {
        $usernameFld.val("");
        $passwordFld.val("");
        $firstNameFld.val("");
        $lastNameFld.val("");
        $emailFld.val("");
        $phoneFld.val("");
        $dobFld.val("");
        $roleFld.val("");
    }
})();