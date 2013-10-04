
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

exports.user = function(req, res){
  res.render('pages/user/index', { title: 'Profile' });
};

exports.useredit = function(req, res){
  res.render('pages/user/edit/index', { title: 'Profile' });
};

exports.usercontacts = function(req, res){
  res.render('pages/user/contacts/index', { title: 'Profile' });
};