const express = require("express")
const data = require("./data")

const app = express()

app.get("/",(req, res)=>{
    res.send("Home Route")
})

app.get("/Madhya-Pradesh",(req,res)=>{
    res.send(data.filter((f)=> f.state === "Madhya Pradesh"))
})

app.get("/Himachal-Pradesh",(req,res)=>{
    res.send(data.filter((f)=> f.state === "Himachal Pradesh"))
})

app.get("/Kashmir",(req,res)=>{
    res.send(data.filter((f)=> f.state === "Kashmir"))
})

app.get("/Gujarat",(req,res)=>{
    res.send(data.filter((f)=> f.state === "Gujarat"))
})

app.get("/Nagaland",(req,res)=>{
    res.send(data.filter((f)=> f.state === "Nagaland"))
})

app.get("/Maharashtra",(req,res)=>{
    res.send(data.filter((f)=> f.state === "Maharashtra"))
})

app.get("/West-Bengal",(req,res)=>{
    res.send(data.filter((f)=> f.state === "West Bengal"))
})

app.get("/Haryana",(req,res)=>{
    res.send(data.filter((f)=> f.state === "Haryana"))
})

app.get("/Assam",(req,res)=>{
    res.send(data.filter((f)=> f.state === "Assam"))
})

app.get("/Puduchery",(req,res)=>{
    res.send(data.filter((f)=> f.state === "Puduchery"))
})

app.listen(2100,()=>{
    console.log("Server Started")
})