var AboutsController = {
  index: function(req, res) {
    res.render('abouts/index', {
        title: ' abouts',
        message: 'abouts'
    });
  }
};

module.exports = AboutsController;
