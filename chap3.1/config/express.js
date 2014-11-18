var express         = require('express'),
    morgan          = require('morgan'),
    compression     = require('compression'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override');

module.exports = function(){
    var app = express();

    if (process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production'){
        app.use(compression());
    }

    //each middleware to be load
    app.use(bodyParser.urlencoded({
        extended : true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    var routes  = require('../app/routes/index.server.routes');
    routes(app);
    return app;
};