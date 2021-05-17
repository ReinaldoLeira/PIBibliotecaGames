const express = require('express');
const app = require('../app');
const router = express.Router();
const usersController = require('../controller/usersController');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get ('/login', usersController.login);
router.get ('/registrar',usersController.registrar);
router.post ('/registrar', (req, res) => {
  console.log(req.body);
  res.redirect('/')

});

module.exports = router;