const models = require('../models');

module.exports.showPerfil = async (req, res) => {
    const usuario = req.session.usuario
    const params = req.params.id
    const perfil = await models.Perfil.findOne({
        where: { id : params }
    })
    
   if(perfil) {
       res.render('./perfil/usuario.ejs', { usuario : usuario , perfil : perfil})
   }

    
}

module.exports.showPosts = async (req, res) => {
    const params = req.params.id
    const perfil = await models.Perfil.findOne({
        where: { id : params }
    })
    const posts = await models.Post.findAll({
        where: { id : perfil.id }
    })
    if(perfil){
        res.render('./perfil/posts.ejs', {usuario : req.session.usuario , perfil: perfil, posts : posts})
    }   
}

module.exports.showAnalise = async (req, res)=> {
    const params = req.params
    const perfil = models.Perfil.findOne({
        where: { id : params }
    })
    const analise = models.Analise.findAll({
         
        where: { id : perfil.id}
    })
    if(perfil){
        res.render('./perfil/analise.ejs', {usuario : req.session.usuario , perfil: perfil , analises : analise })
    }  
}

module.exports.showMidias = async (req, res) => {
    const params = req.params
    const perfil = models.Perfil.findOne({
        where: { id : params }
    })
    const midias = models.Midia.findAll({
        where: { id: perfil.id }
    })
    if(perfil){
        res.render('./perfil/userMidias.ejs', {usuario : req.session.usuario , perfil: perfil, midias : midias})
    }  
}

module.exports.showBiblioteca = async (req, res) => {
    const params = req.params
    const perfil = models.Perfil.findOne({
        include:'BibliotecaJogo',
        Where : { id : params }
    })
    if(perfil){
        res.render('./perfil/meusJogos.ejs', {usuario : req.session.usuario , perfil: perfil })
    }  
}