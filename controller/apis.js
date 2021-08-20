const models = require('../models')
const { Op } = require('sequelize')
const { param } = require('express-validator')

module.exports.acharJogo =  async (req,res) => {

    const acharJogo = await models.Jogo.findAll({
        include: 'plataforma'
    },{order : [['nome', 'ASC']]})
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
    const params = req.params.id
    const usuario = req.session.usuario
    const userImg = await models.Midia.findAll({ where : {  tipo: 'IMAGEM' }})
    if(userImg){
        res.send({
            userImg : userImg,
            usuario : usuario ,
            params : params
        })
    }else{
        res.send('não achei')
    }
}

module.exports.userVideo = async (req, res) => {
    const params = req.params.id ;
    const usuario = req.session.usuario
    const userVideo = await models.Midia.findAll({ where : { tipo: 'VIDEO' }})
    if(userVideo){
        res.send({
            userVideo : userVideo,
            usuario :  usuario,
            params : params
        })
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

module.exports.pesquisarJogo = async (req, res) => {
    console.log(req.query)
    const nome = req.query.nome ? req.query.nome : ""
    const plataforma  = req.query.plataforma ? req.query.plataforma : ""
    const genero = req.query.genero ? req.query.genero : ""
    let resultados = await models.Jogo.findAll({        
        where: {                   
            nome: {
                [Op.like]: `%${nome}%`
            }                
        },
        include: [
            {model: models.Plataforma, as: 'plataforma', where: {nome:{ [Op.like]: `%${plataforma}%`}}}, 
            {model: models.Genero, as: 'genero', where: {nome:{ [Op.or]: [genero, {[Op.like]: `%${genero}%`}]}}}],
        attributes: ['nome', 'id', 'capa']
    })       
    return res.send(resultados)
}
module.exports.jogosAnalises = async (req,res) => {    
    
    const acharAnalise = await models.Analise.findAll({
        where: {
            idJogos: req.params.id
        }
    })
    
    res.send(acharAnalise)    
}