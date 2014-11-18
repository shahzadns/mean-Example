var express = require('express');

module.exports = function(){
    var app     = express();
    var routes  = require('../app/routes/index.server.routes');

    routes(app);
    return app;
};