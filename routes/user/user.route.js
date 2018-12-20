const express = require('express');

const controller = require('../../controllers/user/user.controller');
var router = express.Router();

router.use(express.static('public'));

router.get('/view', controller.view);

router.get('/changepassword', controller.getChangePassword);
router.post('/changepassword', controller.postChangePassword);

router.get('/:id', controller.edit);
router.post('/:id', controller.postUpdate);

module.exports = router;