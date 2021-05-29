function auth (req, res, next){

    if(typeof(req.session.usuario)!= "undefined"){
        return next()
    }
    return res.render('proibido', {usuario: req.session.usuario})
}
module.exports = auth;