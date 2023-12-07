const express = require('express');
const mainRoutes=require('./src/routes/main.routes');
const shopRoutes=require('./src/routes/shop.routes');
const adminRoute= require('./src/routes/admin.routes');
const authRoute= require('./src/routes/auth.routes');
const app= express();

app.use(express.static('public'))
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin',adminRoute);
app.use('/admin',authRoute);
// app.get('/home',(req,res)=> res.sendFile(__dirname + '/public_html/pages/index.html'));
// app.get('/ping',(req,res)=> res.send('pong'));
app.listen(4000,()=> console.log("Servidor corriendo en http://localhost:4000"));