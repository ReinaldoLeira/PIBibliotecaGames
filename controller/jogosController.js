const fs = require('fs');
let arrayJogos = require('../model/jogos.json')
let arrayAnalise = require('../model/analise.json')

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

module.exports.analise2 = (req, res) => {
    const jogoSelecionado = selecionarJogo(arrayJogos, req.params.id)   
    const analiseSelecionada = selecionarAnalise(arrayAnalise, req.params.id)  
    res.render('./jogos/analiseJogos2',{usuario: req.session.usuario, jogo:jogoSelecionado, analises: analiseSelecionada})
}

module.exports.historico = (req, res) => {
    const jogoSelecionado = selecionarJogo(arrayJogos, req.params.id)    
    res.render('./jogos/histDePreco',{usuario: req.session.usuario,jogo:jogoSelecionado})
}

module.exports.midia = (req, res) => {
    const jogoSelecionado = selecionarJogo(arrayJogos, req.params.id)    
    res.render('./jogos/midiaJogo',{usuario: req.session.usuario, jogo:jogoSelecionado})
}

module.exports.perfil = (req, res) => {
    const jogoSelecionado = selecionarJogo(arrayJogos, req.params.id)    
    const analiseSelecionada = selecionarAnalise(arrayAnalise, req.params.id) 
    res.render('./jogos/perfilDeJogos',{usuario: req.session.usuario,jogo:jogoSelecionado, analises: analiseSelecionada})
}

module.exports.listar = (req, res) => {
    res.render('./jogos/procurarJogos', {usuario: req.session.usuario, jogos:arrayJogos})
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
    res.redirect('/jogos/perfil/'+jogoNovo.id ,{usuario: req.session.usuario})    
}

