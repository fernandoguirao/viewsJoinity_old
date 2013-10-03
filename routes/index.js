
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('pages/home/index', { title: 'Joinity' });
};

exports.login = function(req, res){
  res.render('pages/login/index', { title: 'Login' });
};

exports.messages = function(req, res){
  res.render('pages/messages/index', { title: 'Messages' });
};