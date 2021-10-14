let express = require('express');

let constroller = require('../controllers/product.controller');

const router = express.Router();

router.get('/', constroller.index);

module.exports = router;