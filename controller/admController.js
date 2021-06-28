const usersArray = require('../model/users.json')
const analiseArray = require('../model/analise.json')
const jogosArray = require('../model/jogos.json')
const db = require('../models')
const { Op } = require('sequelize')
const opUser = ['Cadastrar', 'Listar', 'Análises', 'Mídias']
const opJogo = ['Cadastrar', 'Listar', 'Gênero', 'Plataforma']
const opSistema = ['Notícias', 'Admin', '', ''] 

//user
module.exports.painel = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '', aba: 'user', opcoes: opUser, extra:''})
}
module.exports.painelUser0 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '0', aba: 'user', opcoes: opUser, extra:'', error:{
        content:{email: '', senha:''}
        }})
}
module.exports.painelUser1 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '1', aba: 'user', opcoes: opUser, extra:'', listaUsers: usersArray})
}
module.exports.painelUser2 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '2', aba: 'user', opcoes: opUser, extra:''})
}
module.exports.painelUser3 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '3', aba: 'user', opcoes: opUser, extra:''})
}
//jogo
module.exports.painelJogo = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '', aba: 'jogo', opcoes: opJogo, extra:''})
}
//jogo-cadastrar
module.exports.painelJogo0 = async (req, res) => {
    const plataformas = await db.Plataforma.findAll()
    const generos = await db.Genero.findAll()
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '0', aba: 'jogo', opcoes: opJogo, extra:'', plataformas, generos})
}
module.exports.criarJogo = async (req, res) => {
    console.log(req.body)
    const novoJogo = await db.Jogo.create({
        nome: req.body.nome,
        desenvolvedor: req.body.desenvolvedor,        
        descricao: req.body.descricao,
        lancamento: req.body.lancamento,
        capa: req.body.capa,        
        createdBy: 'testeAdmin' 
    })  
    await db.JogoGenero.create({
        idJogos: novoJogo.id,
        idGeneros: req.body.idGeneros
    })
    await db.JogoPlataforma.create({
        idJogos: novoJogo.id,
        plataformas_id: req.body.plataformas_id
    })
    res.redirect('/gamepadm/painel/jogo/0')
}
//jogo-listar
module.exports.painelJogo1 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '1', aba: 'jogo', opcoes: opJogo, extra:'', listaJogos: jogosArray})
}

//jogo-genero
module.exports.painelJogo2 = async (req, res) => {
    const generos = await db.Genero.findAll()
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '2', aba: 'jogo', opcoes: opJogo, extra:'', generos})
}
module.exports.criarGenero = async (req, res) => {
    if(!req.body.nome){
        return res.send(400)        
    }
    await db.Genero.create({
        nome: req.body.nome
    })    
    res.redirect('/gamepadm/painel/jogo/2')
}
module.exports.deletarGenero = async (req, res) => {
    await db.Genero.destroy({
        where: {id:req.params.id}
})
res.redirect('/gamepadm/painel/jogo/2')
}
module.exports.editarGenero = async (req, res) => {
    const generos = await db.Genero.findOne({
        where: {id:req.params.id}
})
res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '2', aba: 'jogo', opcoes: opJogo, extra:'edit', generos})
}
module.exports.salvarGenero = async (req, res) => {
    await db.Genero.update(
        {nome: req.body.nome},
        {where: {id:req.body.id}
})
res.redirect('/gamepadm/painel/jogo/2')
}

//jogo-plataforma
module.exports.painelJogo3 = async (req, res) => {
    const plataformas = await db.Plataforma.findAll()
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '3', aba: 'jogo', opcoes: opJogo, extra:'', plataformas})
}
module.exports.criarPlataforma = async (req, res) => {
    if(!req.body.nome){
        return res.send(400)        
    }
    await db.Plataforma.create({
        nome: req.body.nome
    })
    res.redirect('/gamepadm/painel/jogo/3')
}
module.exports.deletarPlataforma = async (req, res) => {
        await db.Plataforma.destroy({
            where: {id:req.params.id}
    })
    res.redirect('/gamepadm/painel/jogo/3')
}
module.exports.editarPlataforma = async (req, res) => {
    const plataformas = await db.Plataforma.findOne({
        where: {id:req.params.id}
})
res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '3', aba: 'jogo', opcoes: opJogo, extra:'edit', plataformas})
}
module.exports.salvarPlataforma = async (req, res) => {
    await db.Plataforma.update(
        {nome: req.body.nome},
        {where: {id:req.body.id}
})
res.redirect('/gamepadm/painel/jogo/3')
}


//sistema
module.exports.painelSistema = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '', aba: 'sistema', opcoes: opSistema, extra:''})
}
module.exports.painelSistema0 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '0', aba: 'sistema', opcoes: opSistema, extra:''})
}
module.exports.painelSistema1 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '1', aba: 'sistema', opcoes: opSistema, extra:''})
}
module.exports.painelSistema2 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '2', aba: 'sistema', opcoes: opSistema, extra:''})
}
module.exports.painelSistema3 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '3', aba: 'sistema', opcoes: opSistema, extra:''})
}