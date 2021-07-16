const express = require('express');
const router = express.Router();
const api = require('../controller/apis')


router.get('/jogos', api.acharJogo )
router.get('/posts', api.acharPost)
router.get('/analises', api.userAnalise)

module.exports = router