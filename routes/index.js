
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('pages/home/index', { title: 'Express' });
};

exports.login = function(req, res){
  res.render('pages/login/index', { title: 'Express' });
};