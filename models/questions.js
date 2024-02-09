const mongoose=require('mongoose');
const questionSchema=new mongoose.Schema({
    question:{type:String,required:true},
    option:{type:Array,required:true},
    correct:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model("Question",questionSchema);