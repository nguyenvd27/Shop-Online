const db = require('../../../model/model');
const bcrypt = require('bcrypt-nodejs');


module.exports.signin = (req, res) => {
    res.render('admin/adminPage/adminSignin');
};

module.exports.postSignin = (req, res) => {
    const { email, password } = req.body;
    db.select('email', 'hash','id').from('admin')
        .where('email', '=', email)
        .then(data => {
            if (data.length == 0) {
                res.render('admin/adminPage/adminSignin', {
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
                    res.cookie('adminId', data[0].id,{
                        signed: true
                    });
                    res.redirect('/admin/orders');
                
                } else {
                    //res.status(400).json('wrong credentials');
                    res.render('admin/adminPage/adminSignin', {
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

module.exports.createAdmin = (req, res) => {
    const { emailCreate, passwordCreate} = req.body;
    const hash = bcrypt.hashSync(passwordCreate);

    db('admin').insert({
        email: emailCreate,
        hash: hash
    }).then(data => {
        res.redirect('/admin/signin');
    })
}