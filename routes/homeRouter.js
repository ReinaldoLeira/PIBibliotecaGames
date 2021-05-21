const express = require('express');
const app = require('../app');
const router = express.Router();
const homeController = require('../controller/homeController')

router.get('/quemsomos', homeController.quemSomos)
router.get('/ajuda', homeController.ajuda)
router.get('/termoUso', homeController.termo)
router.get('/contato', homeController.contato)

module.exports = router;