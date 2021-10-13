const sortId = require('shortid');
let db = require('../db');

module.exports.index = function(req, res) {
  res.render('users/index', {
    title: 'Danh Sach Users',
    users: db.get('dataUsers').value(),
  });
};

module.exports.search = function(req, res) {
  const q = req.query.q;
  const dataUsers = db.get('dataUsers').value();
  let matchedUsers = dataUsers.filter(function(user) {
    return user.name.toUpperCase().indexOf(q.toUpperCase()) !== -1;
  })
  res.render('users/index', {
    users: matchedUsers,
  })
};

module.exports.create = function(req, res) {
  res.render('users/create');
};

module.exports.get = function(req, res) {
  let id = req.params.id;
  let user = db.get('dataUsers').find({ id: id }).value();
  res.render('users/view', { users: user });
};

module.exports.postCreate = function(req, res) {
  req.body.id = sortId.generate();
  db.get('dataUsers').push(req.body).write();
  res.redirect('/users');
};