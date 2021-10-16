let express = require('express');

let constroller = require('../controllers/tranfer.controller');

const router = express.Router();

router.get('/create', constroller.create);
router.post('/create', constroller.postCreate);

module.exports = router;