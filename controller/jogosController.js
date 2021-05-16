const fs = require('fs');
let arrayJogos = require('../model/jogos.json')

function salvarJogos(arrayJogos) {
    fs.writeFileSync(
      './model/jogos.json',
      JSON.stringify(arrayJogos)
    );
  }

module.exports.analise = (req, res) => {
    res.render('./jogos/analiseJogos')
}

module.exports.historico = (req, res) => {
    res.render('./jogos/histDePreco')
}

module.exports.midia = (req, res) => {
    res.render('./jogos/midiaJogo')
}

module.exports.perfil = (req, res) => {
    res.render('./jogos/perfilDeJogos')
}

module.exports.listar = (req, res) => {
    res.render('./jogos/procurarJogos')
}

module.exports.cadastra = (req, res) => {
    res.render('./jogos/cadastraJogo')
}

module.exports.cadastrar = (req, res) => {
    const jogoNovo = {
        id: ++arrayJogos[0],
        ...req.body
    }
    arrayJogos[0] = jogoNovo.id
    arrayJogos.push(jogoNovo)    
    salvarJogos(arrayJogos)
    res.redirect('/jogos/perfil')    
}

