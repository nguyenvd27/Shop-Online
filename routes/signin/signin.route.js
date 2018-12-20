const express = require('express');

const controller = require('../../controllers/signin/signin.controller');
var router = express.Router();

router.use(express.static('public'));

router.get('/',controller.signin );
router.post('/',controller.postSignin );

router.get('/create', controller.getUser);
router.post('/create', controller.postCreateUser);

module.exports = router;