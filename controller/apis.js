const models = require('../models')

module.exports.acharJogo =  async (req,res) => {

    const acharJogo = await models.Jogo.findAll({order : [['nome', 'ASC']]})
    res.send(acharJogo)
}

module.exports.userAnalise = async (req,res) => {
    
    const usuario = req.session.usuario
    const acharAnalise = await models.Analise.findAll({ include: 'Jogo',
        where: {
            idPerfis:  usuario.id
        }, order: [['createdAt', 'DESC']]
    })
    
    res.send(acharAnalise)    
}

module.exports.acharPost = async (req,res) => {

    const usuario = req.session.usuario
    const acharPosts = await models.Post.findAll({where: { idPerfis : usuario.id  }, order: [['createdAt', 'DESC']] })
    

    res.send(acharPosts)
}

module.exports.userImg = async (req, res) => {

    const usuario = req.session.usuario
    const userImg = await models.Midia.findAll({ where : { idPerfis: usuario.id, tipo: 'IMAGEM' }})
    if(userImg){
        res.send(userImg)
    }else{
        res.send('não achei')
    }
}

module.exports.userVideo = async (req, res) => {

    const usuario = req.session.usuario
    const userVideo = await models.Midia.findAll({ where : { idPerfis: usuario.id , tipo: 'VIDEO' }})
    if(userVideo){
        res.send(userVideo)
    }else{
        res.send('não achei')
    }
}

module.exports.plataformas = async (req,res) => {

    const plataformas = await models.Plataforma.findAll()

    if(plataformas){
        return res.send(plataformas)
    } else {
        return res.send('[não foi encontrado nenhuma plataforma]')
    }
}

module.exports.minhasBibliotecas = async (req,res) => {    
    try{
        const usuario = req.session.usuario
        const acharBiblioteca = await models.Biblioteca.findOne({where: {idPerfis: usuario.id}})
      
        const acharMinhaBiblioteca = await models.BibliotecaJogo.findAll({
            include : 'Jogo',  
            where: { idBibliotecas: acharBiblioteca.id} })        
            return res.send(acharMinhaBiblioteca)
        
    }catch{
        return res.redirect('/login')
    }
}