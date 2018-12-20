const express = require('express');
const multer = require('multer');

var upload = multer({ dest: './public/themes/images/carousel/' });

const controller = require('../../../controllers/admin/adminCarousels/adminCarousels.controller');
var router = express.Router();

router.use(express.static('public'));

router.get('/',controller.carousel);

router.get('/search',controller.search);

router.post('/delete', controller.postDelete);

router.get('/create', controller.create);
router.post('/create', upload.single('image'), controller.postCreate);


module.exports = router;