const express = require('express');

const controller = require('../../controllers/productDetails/productDetail.controller');
var router = express.Router();

router.use(express.static('public'));

router.get('/:id',controller.productDetail);

module.exports = router;