const db = require('../model/model');

module.exports.getProducts = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var perPage =10;
    var total;
    db('products')
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('carousels').then(carousels => {
            db('products').orderBy('id', 'desc')
            .limit(8).offset(0)
            .then(newproducts => {
                db('products').count('id')
                .then( data2 => {
                    total=data2[0].count;
                    res.render('page/index',{
                        page: page,
                        perPage: perPage,
                        total: total,
                        products: data,
                        carousels: carousels,
                        newproducts: newproducts,
                        email: req.signedCookies.email
                    });
                })
            })
        })
    })
};

module.exports.logout = (req, res) => {
    res.clearCookie('email');
    res.redirect('/');
}

module.exports.adminLogout = (req, res) => {
    res.clearCookie('adminId');
    res.redirect('/admin/signin');
}