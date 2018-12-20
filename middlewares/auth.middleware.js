const db = require('../model/model');

module.exports.adminAuth = ( req, res, next) => {
    //console.log('AdminId: ', req.signedCookies.adminId);
    if(!req.signedCookies.adminId){
        res.redirect('/admin/signin');
        return;
    }
    db('admin')
    .where('id', '=', req.signedCookies.adminId)
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
            next();
        }

    })
}