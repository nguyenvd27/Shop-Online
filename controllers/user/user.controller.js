const db = require('../../model/model');
const bcrypt = require('bcrypt-nodejs');

module.exports.view = (req, res) => {
    var email = req.signedCookies.email;
    db('users').where('email','=',email)
    .then(data => {
        res.render('page/userView',{
            user: data[0],
            email: req.signedCookies.email
        });
    })
}

module.exports.getChangePassword = (req, res) => {
    var email = req.signedCookies.email;
    db('users').where('email','=',email)
    .then(data => {
        res.render('page/userChangePassword',{
            user: data[0],
            email: req.signedCookies.email
        });
    })
}

module.exports.postChangePassword = ( req, res) => {
    var email = req.signedCookies.email;
    var { oldPassword, newPassword, xacnhanPassword } = req.body;
    //console.log(oldPassword, newPassword, xacnhanPassword);
    var errors = [];
    if(!oldPassword){
        errors.push('Phải nhập password cũ .');
    }
    if(!newPassword){
        errors.push('new password không được để trống .');
    }
    if(!xacnhanPassword){
        errors.push('Password nhập lại không được để trống.');
    }
    if(errors.length){
        res.render('page/userChangePassword',{
            errors: errors,
            values: req.body
        });
        return;
    }
    db('login').where('email','=', email)
    .then(data => {
        const comparePass = bcrypt.compareSync(oldPassword, data[0].hash);
        if(comparePass){
            if(newPassword===xacnhanPassword){
                const hash = bcrypt.hashSync(newPassword);
                db('login').where('email', '=', email)
                .update({
                    hash: hash
                })
                .then(data => {
                    res.redirect('/user/view');
                })
            }else {
                res.render('page/userChangePassword', {
                    errors: [
                        'New password và password nhập lại không trùng nhau'
                    ],
                    values: req.body,
                    email: email
                });
                return;
            }
        }else{
            res.render('page/userChangePassword', {
                errors: [
                    'Nhập sai password cũ'
                ],
                values: req.body,
                email: email
            });
            return;
        }
    })
}

module.exports.edit = (req, res) => {
    var email = req.signedCookies.email;
    db('users').where('email','=',email)
    .then(data => {
        res.render('page/userEdit',{
            user: data[0],
            email: req.signedCookies.email
        });
    })
}

module.exports.postUpdate = ( req, res) => {
    var id = req.params.id;
    var name = req.body.name;
    var phone = req.body.phone;

    db('users').where('id', '=', id)
    .update({
        name: name,
        phone: phone
    })
    .then(data => {
        res.redirect('/user/view');
    })
}