const quize=require('../models/questions') 
const questionController=()=>{
    return{
        async index(req,res){
            res.render("start")
        },
        async getQuestions(req,res){
            try{
                const ques=await quize.find()
                res.json(ques);
        }catch(e){
            console.error(e);
        }
    },
    questions(req,res){
        res.render("question")
    }
    }
}
module.exports=questionController;