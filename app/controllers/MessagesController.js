var MessagesController = {
  index: function(req, res) {
    res.render('messages/index',{
      title: 'messages',
      message: 'messages'
    });
  }
};

module.exports = MessagesController;
