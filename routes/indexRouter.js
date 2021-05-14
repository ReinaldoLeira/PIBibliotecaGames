const express = require('express');
const app = require('../app');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('./home/index');
});

module.exports = router;