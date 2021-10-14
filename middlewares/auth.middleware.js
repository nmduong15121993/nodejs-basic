const db = require('../db');

module.exports.requireAuth = function(req, res, next) {
  console.log(req.signedCookies);
  if(!req.signedCookies.userId) {
    res.redirect('auth/login');
    return;
  };

  const user = db.get('dataUsers').find({ id: req.signedCookies.userId }).value();
  if(!user) {
    res.redirect('auth/login');
    return;
  };
  res.locals.user = user;
  next();
}