var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var users = require('../database-mysql');
// var items = require('../database-mongo');
var axios = require('axios');
var key = require('../config');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}))

// parse application/json
app.use(bodyParser.json())

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/users', function (req, res) {
  users.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/users', function (req, res) {
  let params = req.body;
  users.postUser(params, function (err, data) {
    if (err) {
      console.log('received an error', err)
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });

  users.postRecord(params, function (err, data) {
    if (err) {
      console.log('received an error', err)
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/games', function (req, res) {
  axios.get('https://api.the-odds-api.com/v3/odds/', {
      params: {
        sport: "basketball",
        region: "us",
        mkt: "h2h",
        apiKey: key.the_odds_key
      }
    })
    .then(function (response) {
      res.send(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});