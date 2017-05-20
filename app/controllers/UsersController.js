var users = require('../models/users');


var UsersController = {
    index: function(req, res) {
        users.create({
          name: req.body.name,
          email: req.body.email
        }, function(err) {
          if(err) {
            //thuc hien that bai
          } else {
            //thuc hien thanh cong
          }
        });
        res.render('home/index', {
            title: ' Hey HomePage',
            message: 'My HomePage',
            login: '1'
        });
    }
};

module.exports = UsersController;
