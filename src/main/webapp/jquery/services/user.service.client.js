function UserServiceClient() {

    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.register = register;
    this.login = login;
    this.profile = profile;
    this.updateProfile = updateProfile;
    this.logout = logout;
    this.url = 'http://localhost:8080/api/user';
    var self = this;


    // accepts a user object and POSTs it to a user Web service
    // receives status
    function createUser(user, callback) {
        var url = "/api/user";
        return fetch(url, {
            method:'POST',
            body: JSON.stringify(user),
            headers:{
                "Content-Type": "application/json"
            }
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
        var url = "/api/user/" + userId;
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers:{
                "Content-Type": "application/json"
            }
        })
    }

    // sends a DELETE request to user Web service with user as path parameter for user to remove
    // receives status
    function deleteUser(userId, callback) {
        var url = "/api/user/" + userId;

        return fetch(url, {
            method: 'delete'
        })
    }


    // POST method to register a user
    function register(user, callback) {
        return fetch('/api/register', {
            method: 'post',
            body: user,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response;
        });
    }

    // POST method to login
    function login(user, callback) {
        return fetch('/api/login', {
            method: 'post',
            body: user,
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response;
        });
    }

    // GET method to get user to populate profile
    function profile(callback) {
        return fetch('/api/profile', {
            method: 'get',
            credentials: 'include'
        }).then(function (response) {
            return response.json();
        });
    }

    // PUT method to update profile
    function updateProfile(user, callback) {
        return fetch('/api/profile', {
            method: 'put',
            body: user,
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }

    // POST method to logout
    function logout(callback) {
        return fetch('/api/logout', {
            method: 'post',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
    }
}
