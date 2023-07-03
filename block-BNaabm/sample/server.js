var express = require("express");

var app = express();
 app.get('/' , (req , res) =>{
    res.send('welcome')
 })

 app.use((req , res, next) =>{
    console.log(req.method , req.url);
    next()
 })
app.listen(4000 , () =>{
    console.log('server is listening on port 4000');
})