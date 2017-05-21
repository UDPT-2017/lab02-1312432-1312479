var users = require('../models/users');


var UsersController = {

    index: function(req, res) {
        res.render('users/index', {
            title: 'users',
            message: 'users'
        });
    },
    signup: function(req, res) {
        res.render('users/register');
    },
    register: function(req, res) {
        users.findByEmail({
                email: req.body.email
            },
            function(err, result) {
                if (err) {
                    //thuc hien that bai
                    res.redirect('/users/register');
                } else {
                    //kiem tra dang nhap
                    console.log(req.body.email);
                    console.log(result.length);
                    if (result.length > 0) {
                        //ton tai user
                        res.redirect('/users/register');
                    } else {
                        //user chua ton tai
                        //insert user
                        users.register({
                                email: req.body.email,
                                password: req.body.password,
                                name: req.body.name,
                                phone: req.body.phone
                            },
                            function(err, result) {
                                if (err) {
                                    //that bai
                                    res.redirect('/users/register');
                                } else {
                                    //thanh cong
                                    res.redirect('/users/login');
                                }
                            });
                    }
                }
            });
    },

    login: function(req, res) {
        res.render('users/login', {
            title: 'users',
            message: 'users',
            layout: 'application'
        });
    },
    search: function(req, res) {
        users.search({
                email: req.body.email,
                password: req.body.password
            },
            function(err, result) {
                if (err) {
                    //thuc hien that bai
                    res.redirect('/users/login');
                } else {
                    //kiem tra dang nhap
                    console.log(result[0].id);

                    if (result.length == 1) {
                        //thuc hien thanh cong
                        //luu session
                        req.session.userid = result[0].id;
                        //redirect   trang users
                        console.log(req.session);
                        res.redirect('/users');
                    } else {
                        res.redirect('/users/login');

                    }

                }
            });
    },
    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/users/login');
    }
};

module.exports = UsersController;
