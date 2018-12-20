const express = require('express');

const controller = require('../../controllers/cart/cart.controller');
var router = express.Router();

router.use(express.static('public'));

router.get('/add/:id',controller.add);

router.post('/checkout/update', controller.update);
router.get('/checkout/update', controller.getUpdate);

router.post('/checkout/delete', controller.delete);
router.get('/checkout/delete', controller.getDetele);

router.get('/checkout' , controller.cart);



module.exports = router;