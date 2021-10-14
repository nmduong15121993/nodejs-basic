let express = require('express');

const db = require('../db');
let constroller = require('../controllers/auth.controller');

const router = express.Router();

router.get('/login', constroller.login);
router.post('/login', constroller.postLogin);

module.exports = router;