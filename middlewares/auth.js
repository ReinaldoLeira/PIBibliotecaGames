function auth (req, res, next){

    if(typeof(req.session.usuario)!= "undefined"){
        return next()
    }
    return res.send('você precisa está logado.')
}
module.exports = auth;