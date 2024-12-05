var mongoose = require('mongoose');
var Schema = mongoose.Schema;
oneSchema = new Schema({
    id : Number,
    name : String,
    salary : Number,
    age : Number,
    file:string
});
module.exports = mongoose.model('one', oneSchema);