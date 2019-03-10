const express = require('express');
const app = express();
 
app.use(express.static('client'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

let potatoes = [
  "Curly fries",
  "Duchess",
  "Wedges",
  "Dauphinoise"
];
 
app.get('/list', function (req, resp){
    resp.send(potatoes);
});

app.post('/add', function (req, resp){
  const pot = req.body.potato_type;
  console.log(req.body);
  potatoes.push(pot);
  resp.send("Fine that worked");
});

module.exports = app;
