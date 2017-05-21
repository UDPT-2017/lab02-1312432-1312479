var db = require('./db');

var users = {
    search: function(user, callback) {
        db.query('select id, name, phone from users where email = $1 and password = $2', [user.email, user.password],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    register: function(user, callback) {
        db.query('insert into users(email, password, name, phone) values($1, $2, $3, $4)', [user.email, user.password, user.name, user.phone],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    findByEmail: function(user, callback) {
        db.query('select id, name, phone from users where email = $1', [user.email],
            function(err, result) {
                callback(err, result.rows);
            });
    }
};

module.exports = users;
