const express = require('express');
const router = express.Router();
const api = require('../controller/apis')


router.get('/jogos', api.acharJogo )
router.get('/posts', api.acharPost)
router.get('/analises', api.userAnalise)
router.get('/userimg',api.userImg)
router.get('/uservideo' , api.userVideo)
router.get ('/plataformas', api.plataformas)
router.get('/minhabiblioteca', api.minhasBibliotecas)
router.get('/listarjogos', api.listarJogos)
router.get('/listarjogos2', api.pesquisarJogo)
module.exports = router