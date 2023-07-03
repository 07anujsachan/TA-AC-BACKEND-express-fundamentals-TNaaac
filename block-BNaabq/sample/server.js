var express = require( 'express');
var cookieParser = require( 'cookie-parser');

var app = express();

app. use(express. json ( ));
app. use(express. urlencoded ({ extended: false }));
 app.use(express.static(__dirname + "/public"));
app.use(cookieParser()) ;

app.use("/about", (reg, res, next) =>{
    res.cookie('username' , 'anuj')

}
)
app.get('/', (req, res) => {
res.sendFile(__dirname + "/index.html")
}); 
app. listen (4000, () =>{
console. log('server is listening on port 4k')})