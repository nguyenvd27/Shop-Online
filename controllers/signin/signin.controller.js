const db = require('../../model/model');
const bcrypt = require('bcrypt-nodejs');


module.exports.signin = (req, res) => {
    res.render('page/signin');
};

module.exports.postSignin = (req, res) => {
    var errors = [];
    if(!req.body.email){
        errors.push('Email is required.');
    }
    if(!req.body.password){
        errors.push('Password is required.');
    }
    if(errors.length){
        res.render('page/signin',{
            errors: errors,
            values: req.body
        });
        return;
    }
    const { email, password } = req.body;
    db.select('email', 'hash','id').from('login')
        .where('email', '=', email)
        .then(data => {
            if (data.length == 0) {
                res.render('page/signin', {
                    errors: [
                        'User does not exist'
                    ],
                    values: req.body
                });
                return;
            } else {
                const isValid = bcrypt.compareSync(password, data[0].hash);
                console.log(isValid);
                if (isValid) {
                    res.cookie('email', email,{
                        signed: true
                    });
                    res.redirect('/');
                
                } else {
                    //res.status(400).json('wrong credentials');
                    res.render('page/signin', {
                        errors: [
                            'Wrong password'
                        ],
                        values: req.body
                    });
                    return;
                }
            }
        })
};

module.exports.getUser = (req, res) => {
    res.render('page/createUser');
};

module.exports.postCreateUser = (req, res) => {
    var errors = [];
    if(!req.body.email){
        errors.push('Email is required.');
    }
    if(!req.body.password){
        errors.push('Password is required.');
    }
    if(errors.length){
        res.render('page/createUser',{
            errors: errors,
            values: req.body
        });
        return;
    }

    const { name, email, password, phone } = req.body;
    console.log(name, email, password, phone);
    const hash = bcrypt.hashSync(password);
    console.log(name, email, hash);

    db('users').where('email','=',email)
    .then( data => {
        //console.log(data[0]);
        if(data.length == 0){
            db('login').insert({
                email: email,
                hash: hash
            }).then(data => {
                db('users').insert({
                    name: name,
                    email: email,
                    phone: phone,
                    joined: new Date()
                })
                .then(data2 => {
                    res.redirect('/signin');
                })
            })
        }else{
            res.render('page/createUser', {
                errors: [
                    'Email đã tồn tại'
                ],
                values: req.body
            });
            return;
        }
    })
}