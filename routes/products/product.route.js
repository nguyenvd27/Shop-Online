const express = require('express');

const controller = require('../../controllers/products/product.controller');
var router = express.Router();

router.use(express.static('public'));

router.get('/',controller.product);

router.get('/search',controller.search);

router.get('/sortAZ', controller.sortByAZ);

router.get('/sortZA', controller.sortByZA);

router.get('/priceLow', controller.priceLow);

router.get('/priceHigh', controller.priceHigh);

router.get('/category1', controller.getCategory1);// 1 là áo

router.get('/category2', controller.getCategory2);// 2 là quần

module.exports = router;