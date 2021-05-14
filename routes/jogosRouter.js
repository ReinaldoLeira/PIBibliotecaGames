const express = require('express');
const app = require('../app');
const router = express.Router();
const jogosController = require('../controller/jogosController')


router.get('/analise', jogosController.analise)

router.get('/historico/:id',jogosController.historico)

router.get('/midiaJogo/:id',jogosController.midia)

module.exports = router;