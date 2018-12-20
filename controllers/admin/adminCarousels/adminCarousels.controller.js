const db = require('../../../model/model');

module.exports.carousel = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var perPage =6;
    var total;
    db('carousels').orderBy('id','desc')
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        console.log(data);
        db('carousels').count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('admin/adminPage/adminCarousels',{
                page: page,
                perPage: perPage,
                total: total,
                carousels: data,
            });
        })
    })
};

module.exports.search = (req, res ) => {
    var q = req.query.q;
    var page = parseInt(req.query.page) || 1;
    var perPage =6;
    var total;
    var baseUrl = '/search?q=' + q + '\&';
    db('carousels').orderBy('id','desc')
    .whereRaw(`LOWER(name) LIKE ?`, '%' + q.toLowerCase() + '%' )
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('carousels').whereRaw(`LOWER(name) LIKE ?`, '%' + q.toLowerCase() + '%' )
        .count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('admin/adminPage/adminCarousels',{
                page: page,
                perPage: perPage,
                total: total,
                carousels: data,
                q:q,
                baseUrl: baseUrl
            });
        })
    })
}

module.exports.postDelete = (req, res) => {
    var idDelete = parseInt(req.body.idDelete);
    console.log('ID: ',idDelete);
    console.log(typeof idDelete);
    db('carousels').where('id', '=', idDelete)
    .del()
    .then(data => {
        if(data){
            console.log('Deleted');
        }
        
        res.redirect('/admin/carousels')
    })
}

module.exports.create =( req, res) => {
    res.render('admin/adminPage/adminCarouselCreate');
}

module.exports.postCreate =( req, res) => {
    var errors = [];
    if(!req.body.name){
        errors.push('Name is required.');
    }
    if(errors.length){
        res.render('admin/adminPage/adminCarouselCreate',{
            errors: errors,
            values: req.body
        });
        return;
    }
    var {name} = req.body;
    var img = req.file.path.split('/').slice(1).join('/');
    db('carousels').insert({
        name: name,
        img: img
    }).then(data => {
        res.redirect('/admin/carousels');
    })
}


