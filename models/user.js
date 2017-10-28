var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new mongoose.Schema({
username: String,
firstname: String,
lastname: String,
password: String,
email: String,
markDelete:{type:Boolean, default:false},
createdTime:{type:Date, default:Date.now}
});
module.exports = mongoose.model('user',userSchema);