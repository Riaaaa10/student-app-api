const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app=new express();
app.use(cors());
app.use(bodyParser.json());
let student=require('./student.model');
const studentModel = require('./student.model');
mongoose.connect("mongodb+srv://shriya21:tAGtrCq6xhERBGZu@cluster0.zvfqrml.mongodb.net/studentdata?retryWrites=true&w=majority&appName=Cluster0");
const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("MongoDB connection established successfully")
})
app.get("/",(req,res)=>{
    console.log("req received");
    res.json("hello world");});
app.get("/hi",(req,res)=>{
console.log(" hi req received");
res.json("welcome with nodemon");});
app.get("/people",(req,res)=>{
    console.log("people req received");
    
    res.json([{name:"shriya",role:"student"},{name:"khai",role:"student"}]);});
app.get("/students",async(req,res)=>{
    console.log("students req received");
    let data=await (student.find().catch(err=>{
        res.json("error loading data");}));
        res.json(data);});
    // res .json([{name:"shriya",age:"20",department:"IT"},{name:"Khadeeja",age:"22",department:"IT"},{name:"swetha",age:"21",department:"IT"},{name:"Manasa",age:"22",department:"IT"}]);}); 
    app.get('/students/:id',async(req,res)   => {
        let id=req.params.id;
        let data=await student.findById(id).catch(err => {
            res.json("error finding person");});
            if(!data){
                res.json("no found");
            }else{
                res.json(data);
            }    
            });
    app.delete('/students/:id',async(req,res)   => {
                let id=req.params.id;
                await student.findByIdAndDelete(id).then(()=>{
                    res.json("data removed succesfully");}).catch(()=>{
                        res.json("failed deleting data");});});
                             
          
app.post("/students",(req,res)=>{
    console.log(req.body);
    let students=new student(req.body);
    students.save().then(()=>{res.json("saved successfully");}).catch(err=>{
        res.json("error:"+err);
    });
});
app.listen("4000",()=>{
console.log("started server on 4000")});