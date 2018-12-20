const express = require('express');

const controller = require('../../controllers/contact/contact.controller');
var router = express.Router();

router.use(express.static('public'));

router.get('/',controller.contact);

module.exports = router;