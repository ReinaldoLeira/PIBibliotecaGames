const express = require('express');
const router = express.Router();
const {login, logar, registrar, registrado, index} = require ('../controller/usersController');

/* GET home page. */
router.get('/', index);

//rotas de login GET>>POST
router.get ('/login', login);
router.post ('/login', logar);

//ROtas de regristrar usuario GET >> POST
router.get ('/registrar', registrar);
router.post ('/registrar', registrado);

module.exports = router;