var bcrypt = require('bcryptjs');

// store password
bcrypt.genSalt(10, function (err, salt) {
  bcrypt.hash("B4c0/\/", salt, function (err, hash) {
    // Store hash in your password DB.
    console.log(hash);
  });
});

// check password
