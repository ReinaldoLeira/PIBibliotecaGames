const usersArray = require('../model/users.json')
const analiseArray = require('../model/analise.json')
const jogosArray = require('../model/jogos.json')
const opUser = ['Cadastrar', 'Listar', 'Análises', 'Mídias']
const opJogo = ['Cadastrar', 'Listar', 'Gênero', 'Plataforma']
const opSistema = ['Notícias', 'Admin', '', ''] 

//user
module.exports.painel = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '', aba: 'user', opcoes: opUser})
}
module.exports.painelUser0 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '0', aba: 'user', opcoes: opUser, error:{
        content:{email: '', senha:''}
        }})
}
module.exports.painelUser1 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '1', aba: 'user', opcoes: opUser, listaUsers: usersArray})
}
module.exports.painelUser2 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '2', aba: 'user', opcoes: opUser})
}
module.exports.painelUser3 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '3', aba: 'user', opcoes: opUser})
}
//jogo
module.exports.painelJogo = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '', aba: 'jogo', opcoes: opJogo})
}
module.exports.painelJogo0 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '0', aba: 'jogo', opcoes: opJogo})
}
module.exports.painelJogo1 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '1', aba: 'jogo', opcoes: opJogo, listaJogos: jogosArray})
}
module.exports.painelJogo2 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '2', aba: 'jogo', opcoes: opJogo})
}
module.exports.painelJogo3 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '3', aba: 'jogo', opcoes: opJogo})
}
//sistema
module.exports.painelSistema = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '', aba: 'sistema', opcoes: opSistema})
}
module.exports.painelSistema0 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '0', aba: 'sistema', opcoes: opSistema})
}
module.exports.painelSistema1 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '1', aba: 'sistema', opcoes: opSistema})
}
module.exports.painelSistema2 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '2', aba: 'sistema', opcoes: opSistema})
}
module.exports.painelSistema3 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '3', aba: 'sistema', opcoes: opSistema})
}