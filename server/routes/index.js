const express = require('express');
const router  = express.Router();

/* GET home page */
router.use('/phones', require('./phones'));

module.exports = router;
