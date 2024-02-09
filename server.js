const express=require('express');
const app=express();
require('dotenv').config()
const DB=require('./mongodb/connection')
DB();
const session=require('express-session')


app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:1000*60*60*24}
}))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
app.set('view engine','ejs');

const routeGateWay=require("./routes/web")
routeGateWay(app);

app.listen(process.env.PORT, (err)=>{
    if(err)
    throw err;
else
    console.log(`Server is running on port ${process.env.PORT}`);
})