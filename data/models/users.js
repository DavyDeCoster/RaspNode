/**
 * Created by Davy on 11/12/2014.
 */
var mongoose = require("mongoose");
var UserSchema = require("../schemas/users");
var User = mongoose.model('User', UserSchema,"users"); //model,schema,collection
module.exports = User;