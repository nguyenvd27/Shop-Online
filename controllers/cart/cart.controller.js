const db = require('../../model/model');

module.exports.add = (req, res, next) => {
    var productId = req.params.id;
    console.log(productId);
    var sessionId = req.signedCookies.sessionId; 
    console.log(sessionId);
    if(!sessionId){
        res.redirect('/');
        return;
    }

    db('products').where('id', '=', productId)
    .then(data => {
        //console.log(data)
        db('cartsessions').where({
            productid: productId,
            sessionid:  sessionId
          })
        .then(data2 => {
            //console.log(data2);
            if(data2.length === 0){
                db('cartsessions').insert({
                    sessionid: sessionId,
                    productid: data[0].id,
                    name: data[0].name,
                    price: data[0].price,
                    img: data[0].img,
                    description: data[0].description,
                    quantity: 1
                }).then(data2 => {
                    res.redirect('/cart/checkout');
                })
            }else{
                res.redirect('/cart/checkout');
            }
        })
    })
}
module.exports.cart = (req, res) => {
    var sessionId = req.signedCookies.sessionId;
    db.select().from('cartsessions')
    .where('sessionid','=',sessionId)
    .then(data => {
        //console.log(data);
        res.render('page/cart',{
            products: data,
            email: req.signedCookies.email
        });
    })
}

module.exports.update = (req, res, next) => {
    var idUpdate = req.body.id;
    var updateQuantity = req.body.updateQuantity;
    console.log('productid: ', idUpdate);
    console.log('updateQuantity:', updateQuantity);
    db('cartsessions')
    .where('productid', '=', idUpdate)
    .returning('*')
    .update({
        quantity: updateQuantity
    }).then(data => {
        console.log(data);
    })
}

module.exports.getUpdate = (req, res) => {
    res.redirect('/cart/checkout');
}

module.exports.delete = (req, res, next) => {
    var idDelete = req.body.idDelete;
    console.log('productid: ', idDelete);
    db('cartsessions')
    .where('productid', '=', idDelete)
    .returning('*')
    .del()
    .then(data => {
        console.log(data);
    })
}

module.exports.getDetele = (req, res) => {
    res.redirect('/cart/checkout');
}