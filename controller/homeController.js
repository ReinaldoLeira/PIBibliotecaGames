module.exports.quemSomos = (req,res) => {
    res.render('./home/quemsomos', {usuario: req.session.usuario})
}
module.exports.ajuda = (req,res) => {
    res.render('./home/ajuda',{usuario: req.session.usuario})
}
module.exports.termo = (req,res) => {
    res.render('./home/termoUso',{usuario: req.session.usuario})
}
module.exports.contato = (req,res) => {
    res.render('./home/contato', {usuario: req.session.usuario})
}



