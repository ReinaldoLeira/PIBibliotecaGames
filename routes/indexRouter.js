const express = require('express');
const router = express.Router();
const {login, logar, registrar, registrado, index, deletar} = require ('../controller/indexController');
const { sair } = require ('../controller/usersController');
const auth = require('../middlewares/auth');
const redirectSession= require('../middlewares/redirectSession')
/* GET home page. */
router.get('/', index);

//rotas de login GET>>POST
router.get ('/login', redirectSession , login);
router.post ('/login', redirectSession , logar );

//ROtas de regristrar usuario GET >> POST
router.get ('/registrar',redirectSession , registrar);
router.post ('/registrar', redirectSession, registrado);

router.post('/users/deletar/:id', deletar);

router.post ('/sair', auth , sair)

module.exports = router;