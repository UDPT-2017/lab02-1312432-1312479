var Router = require('express').Router;

var controllers = require('../app/controllers');

module.exports = function(app) {
    var homeRoutes = Router()
        .get('/', controllers.home.index);

    var usersRoutes = Router()
        .get('/', controllers.home.index)
        .get('/:id', controllers.home.index);
    app.use('/', homeRoutes);
    app.use('/users', usersRoutes);
};
