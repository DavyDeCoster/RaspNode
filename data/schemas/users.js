/**
 * Created by Davy on 11/12/2014.
 */
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: {type:String, unique:true},
    name: {type:String, index:true}
});