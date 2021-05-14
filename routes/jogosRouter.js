const express = require('express');
const app = require('../app');
const router = express.Router();
const jogosController = require('../controller/jogosController')


router.get('/analise', jogosController.analise)

router.get('/historico/',jogosController.historico)

router.get('/midia/',jogosController.midia)

router.get('/perfil/',jogosController.perfil)

router.get('/',jogosController.listar)

module.exports = router;