const express = require('express');
const router = express.Router();
const admController = require('../controller/admController')
const authAdm = require('../middlewares/authAdm');
const validarJogo = require('../middlewares/validarJogo');
const comandos  = require ('../controller/admUsuarioController')

//login
router.get('/',admController.login)
router.post('/',admController.logar)
router.get('/logout',admController.logout)

//user CADASTRAR && LISTAR && ANALISE && MIDIA
router.get('/painel', authAdm,admController.painel)
router.get('/painel/user/0', authAdm,admController.painelUser0)
router.get('/painel/user/1', authAdm,admController.painelUser1)
router.get('/painel/user/2', authAdm,admController.painelUser2)
router.get('/painel/user/3', authAdm,admController.painelUser3)
//user >Listar, editar , deletar e bloquear
router.post('/editar/usuario', authAdm, comandos.Atualizar )
router.post('/editar/deletar',authAdm,  comandos.Deletar)
router.post('/editar/bloquear', authAdm, comandos.Bloquear)
router.post('/editar/desbloquear', authAdm, comandos.Desbloquear)
//analise > deletar
router.post('/analise/deletar', authAdm, comandos.analiseDeletar)
//midia> deletar
router.post('/midia/deletar', authAdm, comandos.midiaDeletar)
//jogo
router.get('/painel/jogo', authAdm,admController.painelJogo)
//jogo-cadastrar
router.get('/painel/jogo/0', authAdm,admController.painelJogo0)
router.post('/painel/jogo/0', validarJogo, authAdm,admController.criarJogo)
//jogo-listar
router.get('/painel/jogo/1', authAdm,admController.painelJogo1)
router.get('/painel/jogo/1/pesquisar', authAdm,admController.procurarJogo)
router.get('/painel/jogo/1/edit/:id', authAdm,admController.editarJogo)
router.post('/painel/jogo/1/edit/:id', validarJogo, authAdm,admController.salvarJogo)
router.get('/painel/jogo/1/deletar/:id', authAdm,admController.deletarJogo)
//jogo-genero
router.get('/painel/jogo/2', authAdm,admController.painelJogo2)
router.post('/painel/jogo/2', authAdm,admController.criarGenero)
router.get('/painel/jogo/2/deletar/:id', authAdm,admController.deletarGenero)
router.get('/painel/jogo/2/edit/:id', authAdm,admController.editarGenero)
router.post('/painel/jogo/2/edit/:id', authAdm,admController.salvarGenero)
//jogo-plataforma
router.get('/painel/jogo/3', authAdm,admController.painelJogo3)
router.post('/painel/jogo/3', authAdm,admController.criarPlataforma)
router.get('/painel/jogo/3/deletar/:id', authAdm,admController.deletarPlataforma)
router.get('/painel/jogo/3/edit/:id', authAdm,admController.editarPlataforma)
router.post('/painel/jogo/3/edit/:id', authAdm,admController.salvarPlataforma)

//sistema
router.get('/painel/sistema', authAdm,admController.painelSistema)
router.post('/painel/sistema', authAdm,admController.criarNoticia)
router.get('/painel/sistema/0', authAdm,admController.painelSistema0)
router.get('/painel/sistema/1', authAdm,admController.painelSistema1)
// Visualizar admins e mudar role
router.get('/painel/sistema/2', authAdm,admController.painelSistema2)
router.get('/painel/sistema/2/elevar/:id', authAdm,admController.elevar)
router.get('/painel/sistema/2/rebaixar/:id', authAdm,admController.rebaixar)
router.get('/painel/sistema/3', authAdm,admController.painelSistema3)

module.exports = router;