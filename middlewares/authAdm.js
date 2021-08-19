function authAdm (req, res, next){

    if(typeof(req.session.user)!= "undefined"){
        if(req.session.user.role == 'ADMIN'){
            return next()
        }
    }
    return res.redirect('/gamepadm/')
}
module.exports = authAdm;