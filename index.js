const express=require('express');
const cors=require('cors');
const app=new express();
app.use(cors());
app.get("/",(req,res)=>{
    console.log("req received");
    res.json("hello world");});
app.get("/hi",(req,res)=>{
console.log(" hi req received");
res.json("welcome with nodemon");});
app.get("/people",(req,res)=>{
    console.log("people req received");
    res.json([{name:"shriya",role:"student"},{name:"khai",role:"student"}]);});
app.get("/students",(req,res)=>{
    console.log("students req received");
    res.json([{name:"shriya",age:"20",department:"IT"},{name:"Khadeeja",age:"22",department:"IT"},{name:"swetha",age:"21",department:"IT"},{name:"Manasa",age:"22",department:"IT"}]);}); 
app.post("/students",(req,res)=>{
    console.log(req.body);
})
app.listen("4000",()=>{
console.log("started server on 4000")});