var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var UserSchema = new Schema({
    username : String,
    org      : String
});

mongoose.model('User', UserSchema);
