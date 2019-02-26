const express = require('express');
const app = express();
 
app.use(express.static('client'));


let potatoes = [
  "Curly fries",
  "Duchess",
  "Wedges",
  "Dauphinoise"
];
 
app.get('/list', function (req, resp){
    resp.send(potatoes);
});
 

app.listen(8090)
