const models = require('../models');
const { post } = require('../routes/indexRouter');

module.exports.showPerfil = async (req, res) => {
    const usuario = req.session.usuario
    const idParams = req.params.id
    const perfil = await models.Perfil.findOne({
        where: { id : idParams }
    })
    
   if(perfil) {
       res.render('./perfil/usuario.ejs', { usuario : usuario , perfil : perfil})
   }

    
}

module.exports.showPosts = async (req, res) => {

    try{
        
    const usuario = req.session.usuario
    const idParams = req.params.id
    const perfil = await models.Perfil.findOne({
        where: { id : idParams }
    })
    const perfilPosts = await models.Post.findAll({
        where : { idPerfis : perfil.id }
    })
    console.log(perfilPosts);
    
    res.render('./perfil/perfilPost.ejs', {usuario : usuario , perfil: perfil, posts: perfilPosts})
}catch(e){
    res.send('chegou no catch')
}
    
}

module.exports.showAnalise = async (req, res)=> {
    const params = req.params.id
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
    const params = req.params.id
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
    const params = req.params.id
    const perfil = models.Perfil.findOne({
        
        Where : { id : params }
    })
    if(perfil){
        res.render('./perfil/meusJogos.ejs', {usuario : req.session.usuario , perfil: perfil })
    }  
}