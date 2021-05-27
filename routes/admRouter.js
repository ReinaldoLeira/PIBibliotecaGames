const express = require('express');
const router = express.Router();
const admController = require('../controller/admController')

router.get('/painel',admController.painel)
router.get('/painel/user/cadastrar',admController.painelUserCadastrar)
router.get('/painel/user/editar',admController.painelUserEditar)
router.get('/painel/user/bloquear',admController.painelUserBloq)
router.get('/painel/user/apagar',admController.painelUserApagar)

router.get('/painel/jogo',admController.painelJogo)
router.get('/painel/jogo/cadastrar',admController.painelJogoCadastrar)
router.get('/painel/jogo/editar',admController.painelJogoEditar)
router.get('/painel/jogo/bloquear',admController.painelJogoBloq)
router.get('/painel/jogo/apagar',admController.painelJogoApagar)

router.get('/painel/analise',admController.painelAnalise)
router.get('/painel/analise/cadastrar',admController.painelAnaliseCadastrar)
router.get('/painel/analise/editar',admController.painelAnaliseEditar)
router.get('/painel/analise/bloquear',admController.painelAnaliseBloq)
router.get('/painel/analise/apagar',admController.painelAnaliseApagar)





module.exports = router;