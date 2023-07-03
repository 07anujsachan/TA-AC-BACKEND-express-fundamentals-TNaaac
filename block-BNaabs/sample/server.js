
var express = require("express");

var app = express();

app.get("/", (res, req) => {
  res.sendFile("/index.html");
  res.end();
});

app.get("/new", (res, req) => {
  res.sendFile("/new.html");
  res.end();
});

app.post("/new", (res, req) => {
  console.log(req.body);
});

app.get("/users/:username", (res, req) => {
  var username = req.params.username;
  console.log(username);
});

app.listen(3000, () => {
  console.log("server is running on port 3k");
});