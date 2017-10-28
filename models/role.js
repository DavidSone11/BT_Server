var mongoose = require('mongoose');
var schema = mongoose.Schema;
var roleSchema = new mongoose.Schema({
    roleCode:{type:String, default:'Planner'},
    roleDescription:{type:String, default:'Only view privilege'},
    createdTime:{type:Date, default:Date.now}
    
});

module.exports = mongoose.model('role',roleSchema);