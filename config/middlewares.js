var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

module.exports = function(app) {
    app.use(session({
        secret: 'secret',
    }));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(express.static('public'));
    app.use('/components', express.static('bower_components'));
};
