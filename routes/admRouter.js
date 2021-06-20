const express = require('express');
const router = express.Router();
const admController = require('../controller/admController')

//user
router.get('/painel',admController.painel)
router.get('/painel/user/0',admController.painelUser0)
router.get('/painel/user/1',admController.painelUser1)
router.get('/painel/user/2',admController.painelUser2)
router.get('/painel/user/3',admController.painelUser3)

//jogo
router.get('/painel/jogo',admController.painelJogo)
router.get('/painel/jogo/0',admController.painelJogo0)
router.get('/painel/jogo/1',admController.painelJogo1)
router.get('/painel/jogo/2',admController.painelJogo2)
router.post('/painel/jogo/2',admController.criarGenero)
router.get('/painel/jogo/3',admController.painelJogo3)
router.post('/painel/jogo/3',admController.criarPlataforma)

//sistema
router.get('/painel/sistema',admController.painelSistema)
router.get('/painel/sistema/0',admController.painelSistema0)
router.get('/painel/sistema/1',admController.painelSistema1)
router.get('/painel/sistema/2',admController.painelSistema2)
router.get('/painel/sistema/3',admController.painelSistema3)





module.exports = router;