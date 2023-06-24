const mongoose = require("mongoose")

const productschema = mongoose.Schema({
    name:{type:String,required:false},
   description:{type:String,required:true},
    image:{type:String,required:true},
})

const productModel = mongoose.model("authdata",productschema)

module.exports={
    productModel
}