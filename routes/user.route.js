let express = require('express');
const sortId = require('shortid');

const db = require('../db');

const router = express.Router();

router.get('/', function(req, res) {
  res.render('users/index', {
    title: 'Danh Sach Users',
    users: db.get('dataUsers').value(),
  });
});

router.get('/search', function(req, res) {
  const q = req.query.q;
  const dataUsers = db.get('dataUsers').value();
  let matchedUsers = dataUsers.filter(function(user) {
    return user.name.toUpperCase().indexOf(q.toUpperCase()) !== -1;
  })
  res.render('users/index', {
    users: matchedUsers,
  })
})

router.get('/create', function(req, res) {
  res.render('users/create');
})

router.get('/:id', function(req, res) {
  let id = req.params.id;
  let user = db.get('dataUsers').find({ id: id }).value();
  res.render('users/view', { users: user });
})

router.post('/create', function(req, res) {
  req.body.id = sortId.generate();
  db.get('dataUsers').push(req.body).write();
  res.redirect('/users');
})

module.exports = router;