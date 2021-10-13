const express = require('express');
let userRoutes = require('./routes/user.route');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', { name: 'Duong' });
});

app.use('/users', userRoutes);

app.listen(port, () => console.log('App listen on port 3000'));

