const express= require("express")
const authrouter = express.Router()
const bcrypt = require('bcrypt');
const { authModel } = require("../models/auth.model");
const saltRounds = 10;
var jwt = require('jsonwebtoken');

authrouter.post("/signup",async (req,res)=>{

    const {name , email , password } = req.body

try {
let finduser = await authModel.findOne({email})

if(finduser){
    res.status(200).send({"msg":"User Already exist"})
}else{
    
    bcrypt.hash(password, saltRounds, async function(err, hash) {
    
        let newuser = new authModel({name,email,password:hash})
        await newuser.save()
    res.status(200).send({"msg":"User Registered Successfully",newuser,token:jwt.sign({ userID: newuser._id }, 'signup')})
       
    });
}

} catch (error) {
    
res.status(400).send({"msg":error.message})

}
})
authrouter.post("/login",async (req,res)=>{

    const { email , password } = req.body

try {
let finduser = await authModel.findOne({email})

let hashpass = finduser.password
    
bcrypt.compare(password, hashpass, function(err, result) {
    if(result){
        res.status(200).send({"msg":"User Login Successfully",token:jwt.sign({ userID: finduser._id }, 'login')})

    }
});
    
} catch (error) {
    
res.status(400).send({"msg":error.message})

}
})

module.exports={
    authrouter
}
