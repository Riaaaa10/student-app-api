const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Student=new Schema({
    name:{type:"string"},
    age:{type:"string"},
    department:{type:"string"}

    });
module.exports=mongoose.model('Student',Student);
    