const models = require('../models')

module.exports.acharJogo =  async (req,res) => {

    const acharJogo = await models.Jogo.findAll({order : [['nome', 'ASC']]})
    res.send(acharJogo)
}

module.exports.userAnalise = async (req,res) => {
    
    const usuario = req.session.usuario
    const acharAnalise = await models.Analise.findAll({
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