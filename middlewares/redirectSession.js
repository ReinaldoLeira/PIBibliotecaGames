function redirectSession (req, res, next){

    if(!req.session.usuario){
        return next()
    }
    return res.redirect ('/users')
}

module.exports = redirectSession