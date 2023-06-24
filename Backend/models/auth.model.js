const mongoose = require("mongoose")

const authschema = mongoose.Schema({
    name:{type:String,required:false},
    email:{type:String,required:true},
    password:{type:String,required:true},
    terms:{type:String,required:false},
})

const authModel = mongoose.model("authdata",authschema)

module.exports={
    authModel
}