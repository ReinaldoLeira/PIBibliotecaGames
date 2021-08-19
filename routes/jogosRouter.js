const express = require('express');
const app = require('../app');
const router = express.Router();
const jogosController = require('../controller/jogosController')


router.get('/analise/:id', jogosController.analise2)

router.get('/historico/:id',jogosController.historico)

router.get('/midia/:id',jogosController.midia)

router.get('/perfil/:id',jogosController.perfil)

router.get('/',jogosController.listar)
router.get('/pesquisar',jogosController.procurar)

router.get('/cadastra', jogosController.cadastra)

router.post('/cadastrar', jogosController.cadastrar)

router.get('/duvidas', jogosController.duvidas)

router.get('/noticias', jogosController.noticias)

router.get('/noticias/:id', jogosController.noti)


module.exports = router;