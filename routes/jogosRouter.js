const express = require('express');
const app = require('../app');
const router = express.Router();


router.get('/analise', (req, res) => {
    res.render('analiseJogos')
})


module.exports = router;