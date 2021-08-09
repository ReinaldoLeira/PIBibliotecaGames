
const models = require('../models');


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
        
        res.render('./perfil/perfilPost', {
            usuario : usuario ,
            perfil: perfil,
            posts: perfilPosts,
           })
    }catch(e){
        res.send('chegou no catch')
}
    
}

module.exports.showAnalise = async (req, res)=> {
    try{
        const usuario = req.session.usuario
        const params = req.params.id
        const perfil = await models.Perfil.findOne({
            where: { id : params }
        })
        const perfilAnalises = await models.Analise.findAll({
            include : 'Jogo',
            where : { idPerfis : perfil.id}
        })
        
        res.render('./perfil/perfilAnalise.ejs', {usuario : usuario , perfil: perfil , analises : perfilAnalises })
    }catch(e){
        res.send('catch')
    }
}

module.exports.showMidias = async (req, res) => {
    
        const usuario = req.session.usuario
        const params = req.params.id
        
        const perfil = await models.Perfil.findOne({
            where: { id : params }
        })
        const midias = await models.Midia.findAll({
            where: { idPerfis: perfil.id}
        })
                
    try{   
        return res.render('./perfil/perfilMidias.ejs', { usuario: usuario, params: params , perfil: perfil, midias: midias})
    }catch(e) {
        res.send('nada')
    }
}

module.exports.showBiblioteca = async (req, res) => {
    try{
    const usuario = req.session.usuario;
    const params = req.params.id

    const perfil = await models.Perfil.findOne({
            where: { id : params }
    })
    const biblioteca = await models.Biblioteca.findOne({where: {idPerfis: perfil.id}})
    const perfilMeusJogos = await models.BibliotecaJogo.findAll({
        include: 'Jogo',
        where: {idBibliotecas : biblioteca.id}
    })

        return res.render('./perfil/perfil-MeusJogos.ejs', {

            perfilMeusJogos : perfilMeusJogos,
            usuario: usuario ,
            params: params,
            perfil: perfil
        })
    }catch(e) {
        res.send('nada')
    } 
}