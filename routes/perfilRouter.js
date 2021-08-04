const express = require('express');
const app = require('../app');
const router = express.Router();
const { showPerfil, showPosts , showAnalise, showMidias, showBiblioteca, } = require('../controller/perfilController')

router.get ('/:id', showPerfil);
router.get ('/:id/posts', showPosts);
router.get ('/:id/analise', showAnalise);
router.get ('/:id/midias', showMidias);
router.get ('/:id/biblioteca', showBiblioteca);

module.exports = router