const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    roll:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true,
    }

},{timestamps:true});

const userModerl=mongoose.model("user",userSchema);
module.exports=userModerl;