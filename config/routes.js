var Router = require('express').Router;

var controllers = require('../app/controllers');

module.exports = function(app) {
    var homeRoutes = Router()
        .get('/', controllers.home.index);

    var usersRoutes = Router()
        .get('/', controllers.users.index)
        .get('/login', controllers.users.login)
        .get('/create', controllers.users.create);
    var messagesRoutes = Router()
        .get('/', controllers.messages.index);
    var aboutsRoutes = Router()
        .get('/', controllers.abouts.index);
    app.use('/', homeRoutes);
    app.use('/users', usersRoutes);
    app.use('/messages', messagesRoutes);
    app.use('/abouts', aboutsRoutes);

};
