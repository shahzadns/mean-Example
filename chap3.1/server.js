var express = require('./config/express');

//setting up the NODE_ENV variable to 'development' as default.
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();
app.listen(3000);
module.exports = app;

console.log('server is running on port 3000');