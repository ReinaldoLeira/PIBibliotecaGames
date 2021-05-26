const express = require('express');
const router = express.Router();
const admController = require('../controller/admController')

router.get('/painel',admController.painel)











module.exports = router;