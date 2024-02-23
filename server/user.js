var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema=new Schema({
    name:String,
    email:String,
    pincode: String, // Add pincode field to the schema
});
module.exports=mongoose.model("users",userSchema);