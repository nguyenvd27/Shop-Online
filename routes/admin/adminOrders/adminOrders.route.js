const express = require('express');

const controller = require('../../../controllers/admin/adminOrders/adminOrders.controller');

var router = express.Router();

router.use(express.static('public'));

router.get('',controller.order );
router.get('/search', controller.search);

router.post('/delete', controller.delete);

router.get('/:id/xacnhan', controller.xacnhan);

router.get('/:id', controller.orderView);

//router.get('/:id/xacnhan', controller.xacnhan);

module.exports = router;