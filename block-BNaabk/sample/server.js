var express = require("express");

var app = express();
 app.get('/' , (req , res) =>{
    res.send('welcome')
 })
app.listen(3000 , () =>{
    console.log('server is listening on port 3000');
})
