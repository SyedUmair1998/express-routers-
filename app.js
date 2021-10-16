const app = require('express')();
const router = require('express').Router();


const middleware = (req,res,next) =>{
    console.log('middleware running');
    next();
} 

router.use(middleware);


app.get('/',(req,res)=>{
    res.status(200).send('Working fine');
});

app.get('/contact',middleware,(req,res)=>{
    res.send('Contact Working fine');
});

app.get('/about',(req,res)=>{
    res.send('About Working fine');
});

app.get('/login',(req,res)=>{
    res.send('Login Working fine');
});

router.get('/routed',(req,res)=>{
    res.send('Hello')
});

app.get('/signup',(req,res)=>{
    res.send('Signup Working fine');
});

// app.get('*',(req,res)=>{                    // for handling unknown requests 
//     res.send('Bhai kia dal rahay ho');
// });

app.use('/',router);


app.listen(3000,()=>{
    console.log('Running at port 3000');
})