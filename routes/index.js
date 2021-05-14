const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get ('/login', usersController.login);
router.get ('/registrar',usersController.registrar);

module.exports = router;
