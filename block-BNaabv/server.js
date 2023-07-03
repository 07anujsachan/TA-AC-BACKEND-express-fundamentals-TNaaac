var express = require('express')

 var app = express();

 app.get('/', (req, res) =>{
    res.send('<h2>  welcome!! </h2>')
 })

  app.listen(3000 , () =>{
    console.log('server listening port 3000');
  })