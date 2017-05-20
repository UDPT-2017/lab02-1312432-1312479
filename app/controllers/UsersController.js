var users = require('../models/users');


var UsersController = {
    // index: function(req, res) {
    //     users.create({
    //       name: req.body.name,
    //       email: req.body.email
    //     }, function(err) {
    //       if(err) {
    //         //thuc hien that bai
    //       } else {
    //         //thuc hien thanh cong
    //       }
    //     });
    //     res.render('users/index', {
    //         title: ' Hey HomePage',
    //         message: 'My HomePage',
    //         login: '1'
    //     });
    // }
    index: function(req, res) {
        res.render('users/index', {
            title: 'users',
            message: 'users'
        });
    },
    create: function(req, res) {
        res.render('users/create', {
            title: 'users',
            message: 'users'
        });
    },
    login: function(req, res) {
        res.render('users/login', {
            title: 'users',
            message: 'users'
        })
    }
};

module.exports = UsersController;
