const express = require('express');
const app = require('../app');
const router = express.Router();
const homeController = require('../controller/homeController')

router.get('/quemsomos', homeController.quemSomos)

module.exports = router;