
//setting up the NODE_ENV variable to 'development' as default.
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express  = require('./config/express'),
    mongoose = require('./config/mongoose');

var db = mongoose(),
    app = express();

app.listen(4000);
module.exports = app;

console.log('server is running on port 4000');
