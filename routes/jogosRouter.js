const express = require('express');
const app = require('../app');
const router = express.Router();
const jogosController = require('../controller/jogosController')


router.get('/analise/:id', jogosController.analise2)

router.get('/historico/:id',jogosController.historico)

router.get('/midia/:id',jogosController.midia)

router.get('/perfil/:id',jogosController.perfil)

router.get('/',jogosController.listar)

router.get('/cadastra', jogosController.cadastra)

router.post('/cadastrar', jogosController.cadastrar)

router.get('/noticias', jogosController.noticias)

router.get('/noticias/noti', jogosController.noti)/* Sera mudado para /id assim que fizer a integracao com o banco */


module.exports = router;