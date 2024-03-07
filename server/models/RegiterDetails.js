const mongoose =require("mongoose")

const RegisterSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    date:String
})

const RegisterModel = mongoose.model("user",RegisterSchema);
module.exports = RegisterModel