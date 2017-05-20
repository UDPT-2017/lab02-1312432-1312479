var db = require('./db');

var users = {
  create: function(user, callback){
    db.query('select from where a = $1 and b = $2',[user.name, user.pass], function(err, result){
      callback(err, result.rows)
    })
  }
};

module.exports = users;
