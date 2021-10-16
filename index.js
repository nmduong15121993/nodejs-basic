require('dotenv').config();
const express = require('express');
let cookieParser = require('cookie-parser');

let userRoutes = require('./routes/user.route');
let authRoutes = require('./routes/auth.route');
const productRoutes = require('./routes/product.route');
const cartRoutes = require('./routes/cart.route');
const tranferRoutes = require('./routes/tranfer.route');

const sessionMiddleware = require('./middlewares/session.middleware');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);

app.get('/', function(req, res) {
  res.render('index', { name: 'Duong' });
});

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/tranfer', tranferRoutes);

app.listen(port, () => console.log('App listen on port 3000'));

