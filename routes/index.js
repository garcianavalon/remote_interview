var express = require('express');
var router = express.Router();
var controller = require('../controller.js');

/* GET home page. */
router.get('/', controller.visits);

router.get('/spy', controller.spy);

module.exports = router;
