const fs = require('fs');
const db = require('../models')
const { Op } = require('sequelize')
const jogosServices = require('../services/jogosServices')
let arrayJogos = require('../model/jogos.json')
let arrayAnalise = require('../model/analise.json')
const noticias = require('../model/noticias.json');


//Salva o Array no  jogos.json
function salvarJogos(arrayJogos) {
    fs.writeFileSync(
      './model/jogos.json',
      JSON.stringify(arrayJogos)
    );
}

//Recebe o id da pagina e o array e retorna o jogo selecionado
function selecionarJogo(array, id){      
    const selecionado = array.filter((array) => {return array.id === parseInt(id)});    
    return selecionado[0]
}

function selecionarAnalise(array, id){      
    const selecionado = array.filter((array) => {return array.idJogo === parseInt(id)});    
    return selecionado
}

/*module.exports.analise = (req, res) => {
    res.render('./jogos/analiseJogos')
}*/

module.exports.analise2 = async (req, res) => {
    const jogo = await db.Jogo.findOne({        
        where: {id: req.params.id},
        include:['genero','plataforma']
    }) 
    //const jogoSelecionado = selecionarJogo(arrayJogos, req.params.id)   
    const analiseSelecionada = selecionarAnalise(arrayAnalise, req.params.id)  
    res.render('./jogos/analiseJogos2',{usuario: req.session.usuario, jogo, analises: analiseSelecionada})
}

module.exports.historico = async (req, res) => {
    const jogo = await db.Jogo.findOne({        
        where: {id: req.params.id},
        include:['genero','plataforma']
    }) 
    //const jogoSelecionado = selecionarJogo(arrayJogos, req.params.id)    
    res.render('./jogos/histDePreco',{usuario: req.session.usuario, jogo})
}

module.exports.midia = async (req, res) => {
    const jogo = await db.Jogo.findOne({        
        where: {id: req.params.id},
        include:['genero','plataforma']
    }) 
    //const jogoSelecionado = selecionarJogo(arrayJogos, req.params.id)    
    res.render('./jogos/midiaJogo',{usuario: req.session.usuario, jogo})
}

module.exports.perfil = async (req, res) => {
    const jogo = await db.Jogo.findOne({        
        where: {id: req.params.id},
        include:['genero','plataforma']
    }) 
    const analiseJogo = await db.Analise.findAll({include:'Jogo', where: {idJogos : jogo.id}})
    console.log(analiseJogo)
    //const jogoSelecionado = selecionarJogo(arrayJogos, req.params.id)    
    const analiseSelecionada = selecionarAnalise(arrayAnalise, req.params.id) 
    res.render('./jogos/perfilDeJogos',{usuario: req.session.usuario, jogo, analises: analiseSelecionada, analiseJogo: analiseJogo})
}

module.exports.listar = async (req, res) => {
    const jogos = await db.Jogo.findAll({
        include:['genero','plataforma']
    })
    const generos = await db.Genero.findAll()
    const plataformas = await db.Plataforma.findAll()
    res.render('./jogos/procurarJogos', {usuario: req.session.usuario, jogos, generos, plataformas})
}
module.exports.procurar = async (req, res) => {
    const nome = req.query.nome
    const plataforma = req.query.plataforma
    const genero = [].concat(req.query.genero)
    
    const jogos = await jogosServices.pesquisarJogo(nome, plataforma, genero)
    console.log(jogos)
    const generos = await db.Genero.findAll()
    const plataformas = await db.Plataforma.findAll()
    res.render('./jogos/procurarJogos', {usuario: req.session.usuario, jogos, generos, plataformas})
}


module.exports.cadastra = (req, res) => {
    res.render('./jogos/cadastraJogo', {usuario: req.session.usuario})
}

module.exports.cadastrar = (req, res) => {
    const jogoNovo = {
        id: ++arrayJogos[0],
        ...req.body
    }
    arrayJogos[0] = jogoNovo.id
    arrayJogos.push(jogoNovo)    
    salvarJogos(arrayJogos)
    res.redirect('/jogos/perfil/'+jogoNovo.id)    
}
module.exports.noticias = (req, res) => {
    const noticia = noticias
    res.render('./jogos/noticias', {
        usuario: req.session.usuario,
        noticias: noticia
    })};

    module.exports.noti = (req, res) =>{
        const noticia = noticias
        res.render('./jogos/noti', {
            usuario: req.session.usuario,
            noticias: noticia
        })};





