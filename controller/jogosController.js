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
    res.render('./jogos/perfilDeJogos')
}