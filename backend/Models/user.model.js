const mongoose = require("mongoose");
const user = mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique:true
    },
    phone_no:
    {
        type: Number,
        required: true,
        unique:true
    },
    pasword:
    {
        type: String,
        required: true
    }
    
});

const userModel= new mongoose.model("User_data",user);
module.exports=userModel;
