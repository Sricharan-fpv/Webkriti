const express=require("express");
const app=express();
const path = require("path")
var fs = require('fs')

const PORT = process.env.port || 4000;

app.use(express.static('public'))
app.use('/public',express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const params={ }
    res.status(200).render('index2',params);
})
app.get('/index2.ejs',(req,res)=>{
    const params={ }
    res.status(200).render('index2',params);
})
app.get('/robo.ejs',(req,res)=>{
    const params={ }
    res.status(200).render('robo',params);
})
app.get('/debug.ejs',(req,res)=>{
    const params={ }
    res.status(200).render('debug',params);
})
app.get('/bot.ejs',(req,res)=>{
    const params={ }
    res.status(200).render('bot',params);
})
app.get('/cryptohunt.ejs',(req,res)=>{
    const params={ }
    res.status(200).render('cryptohunt',params);
})
app.get('/hackathon.ejs',(req,res)=>{
    const params={ }
    res.status(200).render('hackathon',params);
})
app.get('/sixevent.ejs',(req,res)=>{
    const params={ }
    res.status(200).render('sixevent',params);
})
app.get('/registerform.ejs',(req,res)=>{
    const params={ }
    res.status(200).render('registerform',params);
})
app.get('/signupform.ejs',(req,res)=>{
    const params={ }
    res.status(200).render('signupform',params);
})
app.get('/loginform.ejs',(req,res)=>{
    const params={ }
    res.status(200).render('loginform',params);
})
app.get('/withdrawform.ejs',(req,res)=>{
    const params={ }
    res.status(200).render('withdrawform',params);
})
app.post('/registerform',(req,res)=>{
    var mydata= new registerform(req.body);
    mydata.save().then(()=>{
        res.send("this item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("item was not saved to database")
    });
})
app.listen(PORT, ()=>{
    console.log(`The Application started successfully on port ${PORT}`);
});