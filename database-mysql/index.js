var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sportspicks'
});

module.exports = {
  selectAll: function (callback) {
    connection.query('SELECT * FROM users', function (err, results, fields) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },
  postUser: function (params, callback) {
    let userParams = Object.values(params);
    let queryStr = 'insert into users(first_name, last_name, username) values (?, ?, ?)';
    connection.query(queryStr, userParams, function (err, results) {
      callback(err, results);
    });
  },
  postRecord: function (username, callback) {
    let user_id = connection.query(`SELECT id FROM users WHERE username = ${username}`)
    let addRecordQueryStr = 'insert into records(wins, losses, ties, user_id)  (?, ?, ?, ?)';
    connection.query(addRecordQueryStr, 0, 0, 0, user_id, function (err, results) {
      callback(err, results);
    })
  }
};



// module.exports.selectAll = selectAll;