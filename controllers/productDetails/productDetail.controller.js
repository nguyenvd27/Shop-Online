const db = require('../../model/model');

module.exports.productDetail = (req, res) => {
    db.select().from('products')
    .where('id', '=', req.params.id)
    .then(data => {
        res.render('page/productDetail',{
            product: data[0],
            email: req.signedCookies.email
        });
    })
};