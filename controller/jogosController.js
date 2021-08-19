const db = require('../models')
const { Op } = require('sequelize')
const jogosServices = require('../services/jogosServices')

module.exports.analise2 = async (req, res) => {
    const jogo = await db.Jogo.findOne({        
        where: {id: req.params.id},
        include:['genero','plataforma']
    }) 
    const analiseJogo = await db.Analise.findAll({
        include:'Perfil', where: {idJogos: jogo.id}, order: [['createdAt', 'DESC']]
    })
    res.render('./jogos/analiseJogos2',{usuario: req.session.usuario, jogo, analiseJogo: analiseJogo})
}

module.exports.historico = async (req, res) => {
    const jogo = await db.Jogo.findOne({        
        where: {id: req.params.id},
        include:['genero','plataforma']
    }) 
    res.render('./jogos/histDePreco',{usuario: req.session.usuario, jogo})
}

module.exports.midia = async (req, res) => {
    const jogo = await db.Jogo.findOne({        
        where: {id: req.params.id},
        include:['genero','plataforma']
    })
    const midiaJogo = await db.Midia.findAll({
        where: {
            idJogos : jogo.id
        }
    }) 
    res.render('./jogos/midiaJogo',{usuario: req.session.usuario, jogo , midiaJogo : midiaJogo})
}

module.exports.perfil = async (req, res) => {
    const jogo = await db.Jogo.findOne({        
        where: {id: req.params.id},
        include:['genero','plataforma']
    }) 
    const analiseJogo = await db.Analise.findAll({
        include:'Perfil', where: {idJogos: jogo.id}, order: [['createdAt', 'DESC']]
    })    
    res.render('./jogos/perfilDeJogos',{usuario: req.session.usuario, jogo, analiseJogo: analiseJogo})
}

module.exports.listar = async (req, res) => {    
    const generos = await db.Genero.findAll()
    const plataformas = await db.Plataforma.findAll()
    res.render('./jogos/procurarJogos', {usuario: req.session.usuario, generos, plataformas})
}
module.exports.procurar = async (req, res) => {
    const nome = req.query.nome
    const plataforma = req.query.plataforma
    const genero = [].concat(req.query.genero)
    
    const jogos = await jogosServices.pesquisarJogo(nome, plataforma, genero)
    const generos = await db.Genero.findAll()
    const plataformas = await db.Plataforma.findAll()
    res.render('./jogos/procurarJogos', {usuario: req.session.usuario, jogos, generos, plataformas})
}


module.exports.cadastra = async (req, res) => {
    const plataformas = await db.Plataforma.findAll()
    const generos = await db.Genero.findAll()
    res.render('./jogos/cadastraJogo', {usuario: req.session.usuario, generos, plataformas})
}

module.exports.cadastrar = async (req, res) => {
    const jogoNovo = await jogosServices.criarJogoDB(req.body)
    res.redirect('/jogos/perfil/'+jogoNovo.id)    
}
module.exports.noticias = async (req, res) => {
    const noticias = await db.Noticia.findAll({
        include:'Perfil'
    });
    console.log(noticias)
    res.render('./jogos/noticias', {usuario: req.session.usuario, noticias})
}

module.exports.noti = async (req, res) =>{
    const noticias = await db.Noticia.findOne({
        where: {id: req.params.id}
    });
    res.render('./jogos/noti', {usuario: req.session.usuario, noticias})
    console.log(noticias)
};

module.exports.duvidas = async (req, res) =>{
    
    res.render('./jogos/duvidas', {usuario: req.session.usuario})
}