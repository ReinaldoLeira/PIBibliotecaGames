const usersArray = require('../model/users.json')
const analiseArray = require('../model/analise.json')
const jogosArray = require('../model/jogos.json')

//user
module.exports.painel = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '', aba: 'user'})
}
module.exports.painelUserCadastrar = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: 'Cadastrar', aba: 'user',     error:{
        content:{email: '', senha:''}
        }})
}
module.exports.painelUserEditar = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: 'Editar', aba: 'user', listaUsers: usersArray})
}
module.exports.painelUserBloq = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: 'Bloquear', aba: 'user'})
}
module.exports.painelUserApagar = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: 'Apagar', aba: 'user'})
}
//jogo
module.exports.painelJogo = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '', aba: 'jogo'})
}
module.exports.painelJogoCadastrar = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: 'Cadastrar', aba: 'jogo'})
}
module.exports.painelJogoEditar = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: 'Editar', aba: 'jogo', listaJogos: jogosArray})
}
module.exports.painelJogoBloq = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: 'Bloquear', aba: 'jogo'})
}
module.exports.painelJogoApagar = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: 'Apagar', aba: 'jogo'})
}
//analise
module.exports.painelAnalise = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '', aba: 'analise'})
}
module.exports.painelAnaliseCadastrar = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: 'Cadastrar', aba: 'analise'})
}
module.exports.painelAnaliseEditar = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: 'Editar', aba: 'analise'})
}
module.exports.painelAnaliseBloq = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: 'Bloquear', aba: 'analise', listaAnalises: analiseArray})
}
module.exports.painelAnaliseApagar = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: 'Apagar', aba: 'analise'})
}