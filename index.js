const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

let dataUsers = [
  {id: 1, name: 'Duong'},
  {id: 2, name: 'Nguyen'},
  {id: 3, name: 'Minh'},
];

app.get('/', function(req, res) {
  res.render('index', { name: 'Duong' });
});

app.get('/users', function(req, res) {
  res.render('users/index', {
    title: 'Danh Sach Users',
    users: dataUsers,
  });
});

app.get('/users/search', function(req, res) {
  const q = req.query.q;
  let matchedUsers = dataUsers.filter(function(user) {
    return user.name.toUpperCase().indexOf(q.toUpperCase()) !== -1;
  })
  res.render('users/index', {
    users: matchedUsers,
  })
})

app.listen(port, () => console.log('App listen on port 3000'));

