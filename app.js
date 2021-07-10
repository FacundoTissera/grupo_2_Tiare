const express = require('express');
const app = express();
const {get}=require('http')
const path = require('path')

const publicPath = path.join(__dirname, "./public");

app.use (express.static(publicPath));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname,'views/login.html'));
});
app.get('/productCart', (req, res) =>{
    res.sendFile(path.join(__dirname,'views/productCart.html'));
});
app.get('/productDetail', (req, res) =>{
    res.sendFile(path.join(__dirname,'views/productDetail.html'));
});
app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname,'views/register.html'));
});

app.listen('3000', ()=>{
    console.log('El servidor 3000, está funcionando');

});