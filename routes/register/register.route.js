const express = require('express');

const controller = require('../../controllers/register/register.controller');
var router = express.Router();

router.use(express.static('public'));

router.get('/',controller.register);

router.post('/submit', controller.submit);

module.exports = router;