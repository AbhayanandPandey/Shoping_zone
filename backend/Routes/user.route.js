const express = require("express");
const userRoute = express.Router();
const {userRegister,userLogin} = require("../Controllers/userControllers")
userRoute.post("/register",userRegister);
userRoute.post("/login",userLogin);
module.exports = userRoute;