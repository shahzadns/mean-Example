var users = require('../../app/controllers/users.server.controller');

module.exports = function( app ){
    app.route('/users')
        .get(users.getUsers)
        .post(users.createUser);

    app.route('/users/:id')
        .get(users.getUser)
        .put(users.updateUser)
        .delete(users.deleteUser);
};
