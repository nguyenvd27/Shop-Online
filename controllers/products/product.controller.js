const db = require('../../model/model');

module.exports.product = (req, res ) => {
    var page = parseInt(req.query.page) || 1; //n: trang hien tai
    var perPage =12; //x: so luong products cua 1 trang
    var total;//Tong so products
    // cong thuc start= (n-1)*x, end = n*x
    // var start = ( page -1)*perPage;
    // var end = page*perPage;
    db('products')
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('products').count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('page/product',{
                page: page,
                perPage: perPage,
                total: total,
                products: data,
                email: req.signedCookies.email
            });
        })
    })
}

module.exports.search = (req, res ) => {
    var q = req.query.q;
    var page = parseInt(req.query.page) || 1;
    var perPage =12;
    var total;
    var baseUrl = '/search?q=' + q + '\&';
    db('products')
    .whereRaw(`LOWER(name) LIKE ?`, '%' + q.toLowerCase() + '%' )
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('products').whereRaw(`LOWER(name) LIKE ?`, '%' + q.toLowerCase() + '%' )
        .count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('page/product',{
                page: page,
                perPage: perPage,
                total: total,
                products: data,
                q:q,
                baseUrl: baseUrl,
                email: req.signedCookies.email
            });
        })
    })
}

module.exports.sortByAZ = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var perPage =12;
    var total;
    var baseUrl = '/sortAZ?';
    db('products').orderBy('name', 'asc')
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('products').count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('page/product',{
                page: page,
                perPage: perPage,
                total: total,
                products: data,
                baseUrl: baseUrl,
                email: req.signedCookies.email
            });
        })
    })
}

module.exports.sortByZA = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var perPage =12;
    var total;
    var baseUrl = '/sortZA?';
    db('products').orderBy('name', 'desc')
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('products').count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('page/product',{
                page: page,
                perPage: perPage,
                total: total,
                products: data,
                baseUrl: baseUrl,
                email: req.signedCookies.email
            });
        })
    })
}

module.exports.priceLow = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var perPage =12;
    var total;
    var baseUrl = '/priceLow?';
    db('products').orderBy('price', 'asc')
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('products').count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('page/product',{
                page: page,
                perPage: perPage,
                total: total,
                products: data,
                baseUrl: baseUrl,
                email: req.signedCookies.email
            });
        })
    })
}

module.exports.priceHigh = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var perPage =12;
    var total;
    var baseUrl = '/priceHigh?';
    db('products').orderBy('price', 'desc')
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('products').count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('page/product',{
                page: page,
                perPage: perPage,
                total: total,
                products: data,
                baseUrl: baseUrl,
                email: req.signedCookies.email
            });
        })
    })
}

module.exports.getCategory1 = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var perPage =12;
    var total;
    var baseUrl = '/category1?';
    db('products').where('category','=',1)
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('products')
        .where('category','=',1).count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('page/product',{
                page: page,
                perPage: perPage,
                total: total,
                products: data,
                baseUrl: baseUrl,
                email: req.signedCookies.email
            });
        })
    })
}

module.exports.getCategory2 = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var perPage =12;
    var total;
    var baseUrl = '/category2?';
    db('products').where('category','=',2)
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('products')
        .where('category','=',2).count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('page/product',{
                page: page,
                perPage: perPage,
                total: total,
                products: data,
                baseUrl: baseUrl,
                email: req.signedCookies.email
            });
        })
    })
}