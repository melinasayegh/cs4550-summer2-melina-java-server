function UserServiceClient() {

    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'http://localhost:8080/api/user';
    var self = this;


    // accepts a user object and POSTs it to a user Web service
    // receives status
    function createUser(user, callback) {
        var url = "/api/user";

        return fetch(url, {
            method: 'post',
            body: user
        })

    }

    // sends GET request to a user Web service
    // receives JSON array of all users
    function findAllUsers(callback) {
        var url = "/api/user";
        return fetch(url)
            .then(function (response) {
                return response.json();
            });
    }

    // sends GET request with userId as path parameter
    // receives a single JSON object for the userId
    function findUserById(userId, callback) {
        var url = "/api/user/" + userId;
        return fetch(url)
            .then(function(response) {
                return response.json();
            });

    }

    // accepts a user id and user object with new property values for the user id
    // sends PUT requests with user object and user id as path parameter
    function updateUser(userId, user, callback) {

    }

    // sends a DELETE request to user Web service with user as path parameter for user to remove
    // receives status
    function deleteUser(userId, callback) {
        var url = "/api/user/" + userId;

        return fetch(url, {
            method: 'delete'
        })
    }
}
