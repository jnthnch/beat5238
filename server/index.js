var express = require('express');
var bodyParser = require('body-parser');
var users = require('../database-mysql');
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

app.use(bodyParser.json())

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

// so we can go directly to http://localhost:3000/dashboard
app.get('/dashboard', function (req, res) {
  res.sendfile(path.resolve(__dirname + '/../react-client/dist', 'index.html'));
})
// so we can go directly to http://localhost:3000/createuser
app.get('/createuser', function (req, res) {
  res.sendfile(path.resolve(__dirname + '/../react-client/dist', 'index.html'));
})

// create user from CreateUserForm
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

// login from LoginForm
app.post('/users/:username', function (req, res) {
  let usernameSubmitted = req.body.username;
  let passwordSubmitted = req.body.password;
  users.getUser(usernameSubmitted, function (err, data) {
    let db_salt = data[0].salt
    let db_hashed_password = data[0].hashed_password;

    if (err) {
      // dont send status code
      res.sendStatus(500);
    } else {
      bcrypt.hash(passwordSubmitted, db_salt, function (err, hash) {
        if (hash === db_hashed_password) {
          // res.json(data);
          res.send('ok')
        } else {
          res.sendStatus(500)
        }
      });
    }
  });
});

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
      //this.hashPassword(dbPassword, salt)
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

app.get('/users', function (req, res) {
  users.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});