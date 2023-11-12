const express = require('express');
const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><lable>fill the form</lable><br><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');
})
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    res.send('<h1>hello to express!</h1>')
})

app.listen(3000);