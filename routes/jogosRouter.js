const express = require('express');
const app = require('../app');
const router = express.Router();
const jogosController = require('../controller/jogosController')
const auth = require('../middlewares/auth');
const validarJogo = require('../middlewares/validarJogo');


router.get('/analise/:id', jogosController.analise2)

router.get('/historico/:id',jogosController.historico)

router.get('/midia/:id',jogosController.midia)

router.get('/perfil/:id',jogosController.perfil)

router.get('/',jogosController.listar)
router.get('/pesquisar',jogosController.procurar)

router.get('/cadastra', auth, jogosController.cadastra)

router.post('/cadastrar', validarJogo, auth, jogosController.cadastrar)

router.get('/noticias', jogosController.noticias)

router.get('/noticias/:id', jogosController.noti)


module.exports = router;