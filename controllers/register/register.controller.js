const db = require('../../model/model');

module.exports.register = (req, res ) => {
    // res.render('page/register',{
    //     email: req.signedCookies.email
    // });
    var sessionId = req.signedCookies.sessionId;
    db('cartsessions')
    .where('sessionid','=',sessionId)
    .then(data => {
        res.render('page/register',{
            products: data,
            email: req.signedCookies.email
        });
    })
}

module.exports.submit = (req, res) => {
    var sessionId = req.signedCookies.sessionId;
    var infor = req.body.infor;
    console.log(req.body.infor);
    console.log(req.body.infor.length);
    var errors = [];
    if(req.body.infor.length <6){
        errors.push('Chưa điền đầy đủ thông tin .');
    }
    console.log(errors);
    if(errors.length){
        res.render('page/register',{
            errors: errors
        });
        return;
    }
    var name, phone, email, address, city, addinfor, totalprice=0;
    for(var i=0; i<infor.length;i++){
        if(infor[i].name === 'fullName'){
            name = infor[i].value;
        }else if(infor[i].name==='phone'){
            phone = infor[i].value;
        }else if(infor[i].name==='email'){
            email = infor[i].value;
        }else if(infor[i].name==='address'){
            address = infor[i].value;
        }else if(infor[i].name==='city'){
            city = parseInt(infor[i].value);
        }else if(infor[i].name==='aditionalInfo'){
            addinfor = infor[i].value;
        }
    }
    db('cartsessions').where('sessionid', '=', sessionId)
    .then(data => {
        console.log(data);
        for(var j=0; j< data.length; j++){
            totalprice = totalprice + data[j].price*data[j].quantity;
        }
        console.log(totalprice);

        db('orders').insert({
            name: name,
            phone: phone,
            email: email,
            address: address,
            city: city,
            dateorder: db.fn.now(),
            addinfor: addinfor,
            totalprice: totalprice
        }).returning('*')
        .then(data2 => {
            for(var k=0; k< data.length; k++){
                db('orderdetail').insert({
                    orderid: data2[0].id,
                    productid: data[k].productid,
                    name: data[k].name,
                    price: data[k].price,
                    img: data[k].img,
                    description: data[k].description,
                    quantity: data[k].quantity
                }).returning('*')
                .then(data3 => {
                    console.log(data3);
                })
            }
            res.redirect('/');
        })
    })
}