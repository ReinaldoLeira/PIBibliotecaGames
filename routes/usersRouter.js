const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');

router.get ('/analise', usersController.analise);

router.get ('/form-analise', usersController.formAnalise);

router.get ('/meusjogos', usersController.meusJogos);

router.get ('/posts', usersController.posts);

router.get ('/', usersController.usuario)

module.exports = router