(function () {

    function init() {
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


    function handleRepsonse() {

    }

    fetch('checkLogin')


})
