var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var users = require('../database-mysql');
// var items = require('../database-mongo');
var axios = require('axios');
var key = require('../config');
var path = require('path');
var morgan = require('morgan');
var bcrypt = require('bcryptjs');


var app = express();
app.use(morgan('short'))


app.use(bodyParser.urlencoded({
  extended: true
}))

// parse application/json
app.use(bodyParser.json())

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// app.get('*', function (req, res) {
//   res.sendFile(path.resolve(__dirname, '../react-client/dist/index.html'))
// })

app.get('/users', function (req, res) {
  users.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

// so we can enter http://localhost:3000/dashboard
app.get('/dashboard', function (req, res) {
  res.sendfile(path.resolve(__dirname + '/../react-client/dist', 'index.html'));
})

checkPassword = (username, password) => {
  $.ajax({
    type: "GET",
    url: `/users/${username}`,
    data: {
      password: password
    },
    success: (data) => {
      // get salt back from database
      let dbPassword = data[0].password
      //this.checkBcrypt(dbPassword, salt)
      if (dbPassword === password) {
        console.log('password matches!!!')
        // TODO route to BETTING PAGE
      } else {
        alert('wrong password entered')
      }
    },
    error: (err) => {
      console.log('err', err);
    }
  })
}

checkBcrypt = (password, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log('hash is', hash)
  });
}

// check for password
app.get('/users/:username', function (req, res) {
  let username = req.params.username
  users.getUser(username, function (err, data) {
    if (err) {
      // dont send status code
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/createuser', function (req, res) {
  let params = req.body;
  let password = Object.values(params)[3];
  password = password[0];
  delete params['password'];

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      params['hashed_password'] = hash;
      params['salt'] = salt;
      users.postUser(params, function (err, data) {
        if (err) {
          console.log('received an error', err)
          res.sendStatus(500);
        } else {
          res.json(data);
        }
      });
    });
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