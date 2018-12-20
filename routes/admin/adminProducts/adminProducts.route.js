const express = require('express');
const multer = require('multer');

var upload = multer({ dest: './public/uploads/' });

const controller = require('../../../controllers/admin/adminProducts/adminProducts.controller');

var router = express.Router();

router.use(express.static('public'));


router.get('/',controller.products );

router.get('/search',controller.search);

router.get('/create', controller.create);
router.post('/create', upload.single('image'), controller.postCreate);

router.post('/delete', controller.postDelete);

router.get('/:id', controller.edit);
router.post('/edit/:id', upload.single('image'), controller.editUpdate)

module.exports = router;