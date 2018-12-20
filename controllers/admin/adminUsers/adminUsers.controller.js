const db = require('../../../model/model');

module.exports.users = (req, res ) => {
    var page = parseInt(req.query.page) || 1;
    var perPage =10;
    var total;
    db('users').orderBy('id','asc')
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('users').count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('admin/adminPage/adminUsers',{
                page: page,
                perPage: perPage,
                total: total,
                users: data,
            });
        })
    })
}

module.exports.search = (req, res ) => {
    var q = req.query.q;
    var page = parseInt(req.query.page) || 1;
    var perPage =10;
    var total;
    var baseUrl = '/search?q=' + q + '\&';
    db('users').orderBy('id','asc')
    .whereRaw(`LOWER(name) LIKE ?`, '%' + q.toLowerCase() + '%' )
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('users').whereRaw(`LOWER(name) LIKE ?`, '%' + q.toLowerCase() + '%' )
        .count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('admin/adminPage/adminUsers',{
                page: page,
                perPage: perPage,
                total: total,
                users: data,
                q:q,
                baseUrl: baseUrl
            });
        })
    })
}

module.exports.delete = (req, res) => {
    var idDelete = req.body.idDelete;
    db('users')
    .where('id', '=', idDelete)
    .returning('*')
    .del()
    .then(data => {
        if(data.length ===0){
            res.redirect('/admin/users');
        }else{
            //console.log(data);
            db('login')
            .where('email', '=', data[0].email)
            .del()
            .then(data => {
                res.redirect('/admin/users');
            })
        }
    })
}