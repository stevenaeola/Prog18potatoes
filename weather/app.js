const express = require('express');
const app = express();

const fetch = require('node-fetch');
 
app.use(express.static('client'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
 
app.get('/city', async function (req, resp){
  console.log (req.query);
  let city = req.query.city_name;
  
  let response = await fetch("https://www.metaweather.com/api/location/search/?query=" + city);

  let body = await response.text();
  let cities = JSON.parse(body);
  let woeid = cities[0].woeid;
  console.log(`woeid ${woeid}`);

  response = await fetch("https://www.metaweather.com/api/location/" + woeid);
  body = await response.text();
  resp.send(body);

});


module.exports = app;
