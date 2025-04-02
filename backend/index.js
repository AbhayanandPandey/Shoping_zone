const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDB = require("./Config/DBconnection");
connectDB();
const userModel=require("./Models/user.model")



 



app.listen(process.env.PORT||3000,(req,res)=>
{
    console.log(`server is running on port no ${process.env.PORT}`);
})
