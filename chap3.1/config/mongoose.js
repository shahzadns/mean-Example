var mongoose = require('mongoose'),
    config   = require('./config');

module.exports = function(){
    var db = mongoose.connect(config.db);

    require('../app/models/user.server.model');

    return db;
};
