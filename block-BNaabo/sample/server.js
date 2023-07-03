var express = require("express");

var app = express();

 app.use(express.json())

 app.get('/' , (req , res) =>{
    res.send('welcome')
 })

app.post('/json', (req ,res) =>{
    console.log(req.body);
})
app.listen(4000 , () =>{
    console.log('server is listening on port 4000');
})