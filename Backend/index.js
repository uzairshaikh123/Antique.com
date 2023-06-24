const express = require("express")
const { connection } = require("./config")
const { authrouter } = require("./routes/auth.routes")
const app = express()


app.use(express.json())
app.use("/",authrouter)




app.get("/",(req,res)=>{
    res.send("hello")

})


app.listen("8080",async ()=>{

try {
    
    await connection
    console.log("connected to server")
    console.log("connected to mongo")

    

} catch (error) {
    console.log('error')
}


})