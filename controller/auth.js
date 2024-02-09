const userModel=require('../models/users');
const homeController=()=>{
    return{
        index(req,res){
            res.render('index');
        },
        register(req,res){
            res.render('register');
        },
        async postRegister(req,res){
            try {
                const {username,roll,age,gender,pass}=req.body;
                if(!username || !roll || !age || !gender || !pass)
                {
                    res.status(201).json("some fields are empty");
                }else{
                    const newuser=await userModel.create({
                        username,
                        roll,
                        age,
                        gender,
                        pass
                    })
                    res.status(201).json({msg:"user registerd ",newuser})
                }
            } catch (error) {
                console.log(error);
            }
        
        },
        login(req,res){
            res.render('login');
        },
        async postLogin(req,res){
            try {
                const {roll,pass}=req.body;
                if(!roll || !pass)
                {
                    res.status(201).json("some fields are empty");
                }else{
                   
                   const User=await userModel.findOne({roll:roll});
                   if(User.pass==pass && User.roll==roll)
                   console.log(User);
                   req.session.user=User;
                    res.status(201).json({msg:"user login successfull ",User})
                }
            } catch (error) {
                console.log(error);
            }
        
        }
    }
}
module.exports=homeController;