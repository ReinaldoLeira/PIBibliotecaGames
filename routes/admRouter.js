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
//jogo-cadastrar
router.get('/painel/jogo/0',admController.painelJogo0)
router.post('/painel/jogo/0',admController.criarJogo)
//jogo-listar
router.get('/painel/jogo/1',admController.painelJogo1)
router.get('/painel/jogo/1/edit/:id',admController.editarJogo)
router.post('/painel/jogo/1/edit/:id',admController.salvarJogo)
router.get('/painel/jogo/1/deletar/:id',admController.deletarJogo)
//jogo-genero
router.get('/painel/jogo/2',admController.painelJogo2)
router.post('/painel/jogo/2',admController.criarGenero)
router.get('/painel/jogo/2/deletar/:id',admController.deletarGenero)
router.get('/painel/jogo/2/edit/:id',admController.editarGenero)
router.post('/painel/jogo/2/edit/:id',admController.salvarGenero)
//jogo-plataforma
router.get('/painel/jogo/3',admController.painelJogo3)
router.post('/painel/jogo/3',admController.criarPlataforma)
router.get('/painel/jogo/3/deletar/:id',admController.deletarPlataforma)
router.get('/painel/jogo/3/edit/:id',admController.editarPlataforma)
router.post('/painel/jogo/3/edit/:id',admController.salvarPlataforma)

//sistema
router.get('/painel/sistema',admController.painelSistema)
router.post('/painel/sistema',admController.criarNoticia)
router.get('/painel/sistema/0',admController.painelSistema0)
router.get('/painel/sistema/1',admController.painelSistema1)
router.get('/painel/sistema/2',admController.painelSistema2)
router.get('/painel/sistema/3',admController.painelSistema3)





module.exports = router;