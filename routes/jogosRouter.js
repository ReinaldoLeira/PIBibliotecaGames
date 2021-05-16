const express = require('express');
const app = require('../app');
const router = express.Router();
const jogosController = require('../controller/jogosController')


router.get('/analise', jogosController.analise)

router.get('/historico/',jogosController.historico)

router.get('/midia/',jogosController.midia)

router.get('/perfil/',jogosController.perfil)

router.get('/perfil/:id',jogosController.perfil2)

router.get('/',jogosController.listar)

router.get('/cadastra', jogosController.cadastra)

router.post('/cadastrar', jogosController.cadastrar)

module.exports = router;