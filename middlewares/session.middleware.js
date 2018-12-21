var shortid = require('shortid');
const db = require('../model/model');

module.exports.session = (req, res, next) => {
    if(!req.signedCookies.sessionId){
        var sessionId = shortid.generate();
        res.cookie('sessionId', sessionId, {
        signed: true
        });
        db('sessions').insert({
            sessionid: sessionId
        }).then(data2 => {
            console.log('add session');
        })
    }
    next();
}

module.exports.cartItems =( req, res, next) => {
    db('cartsessions').where('sessionid','=',req.signedCookies.sessionId)
    .then(data => {
        var price =0;
        var countItem =0;
        if(data.length>0){
            countItem = data.length;
            for(var i=0;i< data.length; i++){
                price = price + data[i].price*data[i].quantity;
            }
            console.log('price: ', price);
            console.log('count: ', countItem);
        }
        res.locals.countItem = countItem;
        res.locals.price = price;
    })
    next();
}

module.exports.numberOfOrders =( req, res, next) => {
    db('orders').where('status','=',0)
    .count('id')
    .then(data => {
        var numberOfOrders =data[0].count;
        res.locals.numberOfOrders = numberOfOrders;
        console.log(numberOfOrders);
    })
    next();
}