const homeController=require("../controller/auth")
const quesController=require("../controller/questionController")

const routeGateWay=(app)=>{
    app.get('/', homeController().index);
    app.get('/register', homeController().register);
    app.post('/register', homeController().postRegister);
    app.get('/login', homeController().login);
    app.post('/login', homeController().postLogin);

    app.get('/start',quesController().index);
    app.get('/getquestion',quesController().getQuestions);
    app.get('/question',quesController().questions);
}

module.exports=routeGateWay;