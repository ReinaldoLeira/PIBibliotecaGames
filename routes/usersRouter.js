const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');



router.get ('/analise', usersController.analise);

router.get ('/login', usersController.login);

router.get ('/registrar',usersController.registrar);

router.get ('/form-analise', usersController.formAnalise);

router.get ('/meusjogos', usersController.meusJogos);

router.get ('/posts', usersController.posts);

router.get ('/usuario', usersController.usuario)

module.exports = router