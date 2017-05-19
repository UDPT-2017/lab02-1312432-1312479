  var express = require('express');
  var exphbs = require('express-handlebars');
  var app = express();
  const pool = require('./lib/db');
  var bodyParser = require('body-parser');
  var session = require('express-session');




  app.use(session({
      secret: '123',
  }));
  app.use(bodyParser.urlencoded({
      extended: true
  }));
  app.use(express.static('public'));
  app.use('/components', express.static('bower_components'));

  app.engine('hbs', exphbs({
      extname: '.hbs',
      defaultLayout: 'application'
  }));
  app.set('view engine', 'hbs');

  app.get('/', function(req, res) {
      //console.log(req.session.get('id'));
      res.render('index', {
          title: ' Hey HomePage',
          message: 'My HomePage',
          login: '1'
      });
  });

  app.listen(process.env.PORT || 3000, function() {
      console.log('Example app listening on port 3000!');
  });
