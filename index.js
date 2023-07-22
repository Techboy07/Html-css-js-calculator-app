const {join} = require("path")

const express = require("express")

const app = express()


app.use("/",express.static(__dirname))


app.get("/", (req,res)=>{

  res.sendFile(__dirname +"/calculator .html")

})
  
app.listen(8080,()=>{
  console.log("server started on port 8080")
  console.log(join(__dirname,"/"))
})
