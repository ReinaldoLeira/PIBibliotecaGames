module.exports.analise = (req, res) => {
    res.render('./jogos/analiseJogos')
}

module.exports.historico = (req, res) => {
    res.render('./jogos/histDePreco')
}

module.exports.midia = (req, res) => {
    res.render('./jogos/midiaJogo')
}