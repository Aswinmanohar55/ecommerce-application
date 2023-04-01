const Express=require("express")
const Cors=require("cors")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const { application } = require("express")

const rModel=require("./model/productmodel")
const { urlencoded } = require("body-parser")

Mongoose.connect("mongodb+srv://aswin:collage123@cluster0.e7ptdq4.mongodb.net/productdb?retryWrites=true&w=majority",{useNewUrlParser:true})


var app=Express()

app.use(Bodyparser.json())
app.use(Bodyparser. urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send("welcome")
})

app.post("/add",(req,res)=>{
let data=new rModel(req.body)
console.log(data)
  res.send(data)
})

app.get("/view",(req,res)=>{
    res.send("view data")
})



app.listen(2500)