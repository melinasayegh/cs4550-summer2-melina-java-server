
function User(username, password, firstName, lastName, email) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;


    this.setUsername = setUsername;
    this.getUsername = getUsername;

    this.setPassword = setPassword;
    this.getPassword = getPassword;

    this.setFirstName = setFirstName;
    this.getFirstName = getFirstName;

    this.setLastName = setLastName;
    this.getLastName = getLastName;

    this.setEmail = setEmail;
    this.getEmail = getEmail;


    function setUsername(username) {
        this.username = username;
    }
    function getUsername() {
        return this.username;
    }

    function setPassword(password) {
        this.password = password;
    }
    function getPassword() {
        return this.password;
    }

    function setFirstName(firstName) {
        this.firstName = firstName;
    }
    function getFirstName() {
        return this.firstName;
    }


    function setLastName(lastName) {
        this.lastName = lastName;
    }
    function getLastName() {
        return this.lastName;
    }


    function setEmail(email) {
        this.password = email;
    }
    function getEmail() {
        return this.email;
    }
}

