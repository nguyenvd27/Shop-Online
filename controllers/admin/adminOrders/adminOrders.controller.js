const db = require('../../../model/model');

module.exports.order = (req, res ) => {
    var page = parseInt(req.query.page) || 1;
    var perPage =10;
    var total;
    db('orders').orderBy('status','asc').orderBy('dateorder','desc')
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('orders').count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('admin/adminPage/adminOrders',{
                page: page,
                perPage: perPage,
                total: total,
                orders: data,
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
    db('orders').orderBy('status','asc').orderBy('dateorder','desc')
    .whereRaw(`LOWER(name) LIKE ?`, '%' + q.toLowerCase() + '%' )
    .limit(perPage).offset((page-1)*perPage)
    .then(data => {
        db('orders').whereRaw(`LOWER(name) LIKE ?`, '%' + q.toLowerCase() + '%' )
        .count('id')
        .then( data2 => {
            total=data2[0].count;
            res.render('admin/adminPage/adminOrders',{
                page: page,
                perPage: perPage,
                total: total,
                orders: data,
                q:q,
                baseUrl: baseUrl
            });
        })
    })
}

module.exports.delete = (req, res) => {
    var idDelete = parseInt(req.body.idDelete);
    console.log('ID: ',idDelete);
    console.log(typeof idDelete);
    db('orders')
    .where('id', '=', idDelete)
    .del()
    .then(data => {
        console.log(data);
        if(data){
            console.log('Deleted');
        }
        
        res.redirect('/admin/orders')
    })
}

module.exports.xacnhan = (req, res) => {
    var id = req.params.id;
    db('orders').where('id', '=', id)
    .update({
        status: 1
    })
    .then(data => {
        res.redirect('/admin/orders')
    })
}

module.exports.orderView = (req, res) => {
    var id = req.params.id;
    db.select().from('orders')
    .where('id','=', id)
    .then(data => {
        db('orderdetail')
        .where('orderid','=', id)
        .then(data2 => {
            res.render('admin/adminPage/adminOrderView',{
                order: data[0],
                products: data2
            });
        })
    })
}
