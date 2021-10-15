let express = require('express');
let multer = require('multer');

const db = require('../db');
let constroller = require('../controllers/user.controller');
let validate = require('../validate/user.validate');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();
let upload = multer({ dest: './public/uploads/' });

router.get('/', authMiddleware.requireAuth, constroller.index);
router.get('/cookie', function(req, res) {
  res.cookie('test-cookie', 'MINH DUONG');
  res.send('Hello Cookie');
})
router.get('/search', constroller.search);
router.get('/create', constroller.create);
router.get('/:id', constroller.get);
router.post('/create', 
  upload.single('avatar'), 
  validate.postCreate, 
  constroller.postCreate
);

module.exports = router;