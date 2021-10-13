const express = require('express');
const app = express();
const sortId = require('shortid');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { generate } = require('shortid');
const adapter = new FileSync('db.json')
const db = low(adapter)

// Set default data
db.defaults({ dataUsers: [] })
  .write();

const port = 3000;

app.set('view engine', 'pug');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
  res.render('index', { name: 'Duong' });
});

app.get('/users', function(req, res) {
  res.render('users/index', {
    title: 'Danh Sach Users',
    users: db.get('dataUsers').value(),
  });
});

app.get('/users/search', function(req, res) {
  const q = req.query.q;
  const dataUsers = db.get('dataUsers').value();
  let matchedUsers = dataUsers.filter(function(user) {
    return user.name.toUpperCase().indexOf(q.toUpperCase()) !== -1;
  })
  res.render('users/index', {
    users: matchedUsers,
  })
})

app.get('/users/create', function(req, res) {
  res.render('users/create');
})

app.get('/users/:id', function(req, res) {
  let id = req.params.id;
  let user = db.get('dataUsers').find({ id: id }).value();
  res.render('users/view', { users: user });
})

app.post('/users/create', function(req, res) {
  req.body.id = sortId.generate();
  db.get('dataUsers').push(req.body).write();
  res.redirect('/users');
})

app.listen(port, () => console.log('App listen on port 3000'));

