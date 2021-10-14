let express = require('express');

const db = require('../db');
let constroller = require('../controllers/user.controller');
let validate = require('../validate/user.validate');

const router = express.Router();

router.get('/', constroller.index);
router.get('/search', constroller.search);
router.get('/create', constroller.create);
router.get('/:id', constroller.get);
router.post('/create', validate.postCreate, constroller.postCreate);

module.exports = router;