var User = require('mongoose').model('User');

//To get a list of all Users.
exports.getUsers = function( req, res, next ){
    User.find(function( err, users ){
        if( err ){
            return next(err);
        } else {
            res.json({
                data: {
                    users: users
                }
            });
        }
    });
};

//To create a new User in the Users collection.
exports.createUser = function( req, res, next ){
    console.log(req.body);
    var user = new User(req.body);

    user.save(function( err, dbUser ){
        if( err ){
            return next(err);
        } else {
            console.log('userDB', dbUser);
            res.json({
                data: {
                    user: user
                }
            });
        }
    });
};

//To get a User from the Users collection.
exports.getUser = function( req, res, next ){
    User.find({_id : req.params.id}, function( err, user ){
        if( err ){
            return next(err);
        } else {
            res.json({
                data: {
                    user: user
                }
            });
        }
    });
};

//To update a User in the Users collection.
exports.updateUser = function( req, res, next ){
    User.update({_id : req.params.id}, req.body, function( err ){
        if( err ){
            return next(err);
        } else {
            res.json({
                data: {
                    message: 'User has been updated successfully.'
                }
            });
        }
    });
};

//To delete a User from the Users collection.
exports.deleteUser = function( req, res, next ){
    User.remove({_id : req.params.id}, function( err ){
        if( err ){
            return next(err);
        } else {
            res.json({
                data: {
                    message: 'User has been deleted successfully.'
                }
            });
        }
    });
};
