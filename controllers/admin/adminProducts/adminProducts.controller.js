const db = require('../../../model/model');

module.exports.products = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var perPage =10;
    var total;
    db('products').orderBy('id','desc')
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        console.log(data);
        db('products').count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('admin/adminPage/adminProducts',{
                page: page,
                perPage: perPage,
                total: total,
                products: data,
            });
        })
    })
};

module.exports.search = (req, res ) => {
    var q = req.query.q;
    var page = parseInt(req.query.page) || 1;
    var perPage =10;
    var total;
    var baseUrl = '/search?q=' + q + '\&';
    db('products').orderBy('id','asc')
    .whereRaw(`LOWER(name) LIKE ?`, '%' + q.toLowerCase() + '%' )
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('products').whereRaw(`LOWER(name) LIKE ?`, '%' + q.toLowerCase() + '%' )
        .count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('admin/adminPage/adminProducts',{
                page: page,
                perPage: perPage,
                total: total,
                products: data,
                q:q,
                baseUrl: baseUrl
            });
        })
    })
}

module.exports.create =( req, res) => {
    res.render('admin/adminPage/adminProductCreate');
}

module.exports.postCreate =( req, res) => {
    var errors = [];
    if(!req.body.name){
        errors.push('Name is required.');
    }
    if(!req.body.price){
        errors.push('Price is required.');
    }
    if(!req.body.category){
        errors.push('Category is requiresd.');
    }
    if(errors.length){
        res.render('admin/adminPage/adminProductCreate',{
            errors: errors,
            values: req.body
        });
        return;
    }
    var {name, price, category, supplier, desc} = req.body;
    category = parseInt(category);
    var img = req.file.path.split('/').slice(1).join('/');
    db('products').insert({
        name: name,
        price: price,
        category: category,
        supplier: supplier,
        img: img,
        description: desc,
    }).then(data => {
        res.redirect('/admin/products');
    })
}

module.exports.postDelete = (req, res) => {
    var idDelete = parseInt(req.body.idDelete);
    console.log('ID: ',idDelete);
    console.log(typeof idDelete);
    db('products')
    .where('id', '=', idDelete)
    .del()
    .then(data => {
        if(data){
            console.log('Deleted');
        }
        
        res.redirect('/admin/products')
    })
}

module.exports.edit = (req, res) => {
    var id = req.params.id;
    db('products').where('id', '=', req.params.id)
    .then(data => {
        res.render('admin/adminPage/adminProductEdit',{
            product: data[0]
        });
    })
}

module.exports.editUpdate = ( req, res) => {
    var id = req.params.id;
    var {name, price, category, supplier, desc} = req.body;
    category = parseInt(category);
    if(req.file === undefined){
        img= 0;
    }else{
        var img = req.file.path.split('/').slice(1).join('/');
    }
    if(img === 0){
        db('products').where('id', '=', id)
        .update({
            name: name,
            price: price,
            category: category,
            supplier: supplier,
            description: desc,
        })
        .then(data => {
            res.redirect('/admin/products');
        })
    }else{
        db('products').where('id', '=', id)
        .update({
            name: name,
            price: price,
            category: category,
            supplier: supplier,
            description: desc,
            img: img
        })
        .then(data => {
            res.redirect('/admin/products');
        })
    }
}
