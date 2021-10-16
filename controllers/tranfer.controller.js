let shortid = require('shortid');

const db = require('../db');

module.exports.create = function(req, res, next) {
  res.render('tranfer/index');
};

module.exports.postCreate = function(req, res, next) {
  let data = {
    id: shortid.generate(),
    amount: parseInt(req.body.amount),
    accountId: req.body.accountId
  };

  db.get('tranfer').push(data).write();
  res.redirect('/tranfer/create');
};