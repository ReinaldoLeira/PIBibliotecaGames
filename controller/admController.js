const usersArray = require('../model/users.json')
const jogosServices = require('../services/jogosServices')
const db = require('../models')
const { Op, Model } = require('sequelize')
const bcrypt = require('bcrypt');
const opUser = ['Cadastrar', 'Listar', 'Análises', 'Mídias']
const opJogo = ['Cadastrar', 'Listar', 'Gênero', 'Plataforma']
const opSistema = ['Cadastrar Notícias', 'Listar Notícias', 'Admin', ''] 

module.exports.login = async (req, res) => {    
    if(typeof(req.session.user)!= "undefined"){
        if(req.session.user.role == 'ADMIN'){
            return res.redirect('/gamepadm/painel')
        }
    }
    res.render('./adm/loginAdmin', {error: ""})
}
module.exports.logar = async (req, res) => {
    const {email, senha} = req.body    
    if(!email || !senha){
        return res.render('./adm/loginAdmin', {error: "caixa vazia"})
    }

    const findUser = await db.User.findOne({ where: { email: email }})
    if (!findUser) {
        return res.render('./adm/loginAdmin', {error: "Login ou Senha incorretos"})
    }
    if (!bcrypt.compareSync(senha, findUser.senha)){        
        return res.render('./adm/loginAdmin', {error: "Login ou Senha incorretos"})
    }
    if (findUser.role != 'ADMIN' ){
        return res.render('./adm/loginAdmin', {error: "Usuário sem Permissão de acesso"})
    }
    const user = await db.User.findOne({
        where: { id: findUser.id},
        attributes: ['id', 'role', 'blocked', 'idPerfis'],
        include: [
            {model: db.Perfil, attributes: ['usuario']}
        ]
    })
    req.session.user = user    
    res.redirect('/gamepadm/painel')
}
module.exports.logout = async (req, res) => {    
    req.session.destroy(function(){
       res.redirect('/gamepadm/')
    }) 
}

//user
module.exports.painel = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '', aba: 'user', opcoes: opUser, extra:'', analises : ''})
}
module.exports.painelUser0 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '0', aba: 'user', opcoes: opUser, extra:'', error:{
        content:{email: '', senha:''}
        }})
}
module.exports.painelUser1 = async (req, res) => {
    const todosUsuarios = await db.User.findAll({
        include: 'Perfil'
    })
    

    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '1', aba: 'user', opcoes: opUser, extra:'', listaUsers: todosUsuarios})
}
module.exports.painelUser2 = async (req, res) => {

    const srcAnalises = await db.Analise.findAll(
        {
            include: ['Perfil', 'Jogo']
        })
        
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '2', aba: 'user', opcoes: opUser, extra:'' , analises : srcAnalises})
}
module.exports.painelUser3 = async (req, res) => {

    const srcMidias = await db.Midia.findAll({
        include: [ 'Jogo', 'Perfil' ]
    }) 
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '3', aba: 'user', opcoes: opUser, extra:'', midias : srcMidias})
}
//jogo
module.exports.painelJogo = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '', aba: 'jogo', opcoes: opJogo, extra:''})
}


//jogo-cadastrar
module.exports.painelJogo0 = async (req, res) => {
    const plataformas = await db.Plataforma.findAll()
    const generos = await db.Genero.findAll()
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '0', aba: 'jogo', opcoes: opJogo, extra:'', plataformas, generos})
}
module.exports.criarJogo = async (req, res) => {   
    const novoJogo = await jogosServices.criarJogoDB(req.body, req.session.user.id)
    const endereco = `/gamepadm/painel/jogo/1/edit/${novoJogo.id}`
    res.redirect(endereco)
}


//jogo-listar
module.exports.painelJogo1 = async (req, res) => {
    const jogos = await db.Jogo.findAll({
        include:['genero','plataforma']
    })    
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '1', aba: 'jogo', opcoes: opJogo, extra:'', jogos})
}

module.exports.procurarJogo = async (req, res) => {
    const nome = req.query.pesquisarJogo
    const plataforma = req.query.plataforma ? req.query.plataforma : ""
    const genero = req.query.genero ? req.query.genero : ""
    const jogos = await jogosServices.pesquisarJogo(nome, plataforma, genero)
    
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '1', aba: 'jogo', opcoes: opJogo, extra:'', jogos})
}

module.exports.editarJogo = async (req, res) => {
    const plataformas = await db.Plataforma.findAll()
    const generos = await db.Genero.findAll()
    const jogo = await db.Jogo.findOne({        
        where: {id: req.params.id},
        include:['genero','plataforma']
    })        
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '1', aba: 'jogo', opcoes: opJogo, extra:'edit', jogo, plataformas, generos})
}
module.exports.salvarJogo = async (req, res) => {        
    await jogosServices.editarJogoDB(req.body, req.params)
    res.redirect('/gamepadm/painel/jogo/1/')
}
module.exports.deletarJogo = async (req, res) => {
    await db.JogoPlataforma.destroy({
        where: {idJogos:req.params.id}
    })

    await db.JogoGenero.destroy({
        where: {idJogos:req.params.id}
    })

    await db.Jogo.destroy({
        where: {id:req.params.id}
    })
    res.redirect('/gamepadm/painel/jogo/1/')
}


//jogo-genero
module.exports.painelJogo2 = async (req, res) => {
    const generos = await db.Genero.findAll()
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '2', aba: 'jogo', opcoes: opJogo, extra:'', generos})
}
module.exports.criarGenero = async (req, res) => {
    if(!req.body.nome){
        return res.send(400)        
    }
    if(req.body.nome.length < 50){
        const generoCadastrado = await db.Genero.findAll({
            where: {nome:req.body.nome}
        })    
        if(!generoCadastrado[0]){
            await db.Genero.create({
                nome: req.body.nome
            })  
        }    
    }
    res.redirect('/gamepadm/painel/jogo/2')
}
module.exports.deletarGenero = async (req, res) => {
    const generoUsando = await db.JogoGenero.findAll({
        where: {idGeneros:req.params.id}
    })    
    if(!generoUsando[0]){
        await db.Genero.destroy({
            where: {id:req.params.id}
        })
    }
res.redirect('/gamepadm/painel/jogo/2')
}
module.exports.editarGenero = async (req, res) => {
    const generos = await db.Genero.findOne({
        where: {id:req.params.id}
    })
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '2', aba: 'jogo', opcoes: opJogo, extra:'edit', generos})
}
module.exports.salvarGenero = async (req, res) => {
    if(!req.body.nome){
        return res.send(400)        
    }
    if(req.body.nome.length < 50){
        const generoCadastrado = await db.Genero.findAll({
            where: {nome:req.body.nome}
        })    
        if(!generoCadastrado[0]){        
            await db.Genero.update(
                {nome: req.body.nome},
                {where: {id:req.params.id}
            })
        }
    }
res.redirect('/gamepadm/painel/jogo/2')
}

//jogo-plataforma
module.exports.painelJogo3 = async (req, res) => {
    const plataformas = await db.Plataforma.findAll()
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '3', aba: 'jogo', opcoes: opJogo, extra:'', plataformas})
}
module.exports.criarPlataforma = async (req, res) => {
    if(!req.body.nome){
        return res.send(400)        
    }
    if(req.body.nome.length < 50){
        const plataformaCadastrada = await db.Plataforma.findAll({
            where: {nome:req.body.nome}
        })    
        if(!plataformaCadastrada[0]){ 
            await db.Plataforma.create({
                nome: req.body.nome
            })
        }
    }
    res.redirect('/gamepadm/painel/jogo/3')
}
module.exports.deletarPlataforma = async (req, res) => {
    const plataformaUsando = await db.JogoPlataforma.findAll({
        where: {idPlataformas:req.params.id}
    })    
    if(!plataformaUsando[0]){    
        await db.Plataforma.destroy({
                where: {id:req.params.id}
        })
    }
    res.redirect('/gamepadm/painel/jogo/3')
}
module.exports.editarPlataforma = async (req, res) => {
    const plataformas = await db.Plataforma.findOne({
        where: {id:req.params.id}
})
res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '3', aba: 'jogo', opcoes: opJogo, extra:'edit', plataformas})
}
module.exports.salvarPlataforma = async (req, res) => {
    if(!req.body.nome){
        return res.send(400)        
    }
    if(req.body.nome.length < 50){
        const plataformaCadastrada = await db.Plataforma.findAll({
            where: {nome:req.body.nome}
        })    
        if(!plataformaCadastrada[0]){ 
            await db.Plataforma.update(
                {nome: req.body.nome},
                {where: {id:req.params.id}
            })
        }
    }
res.redirect('/gamepadm/painel/jogo/3')
}


//sistema
module.exports.painelSistema = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '', aba: 'sistema', opcoes: opSistema, extra:''})
}
module.exports.painelSistema0 =  (req, res) => {    
    
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '0', aba: 'sistema', opcoes: opSistema, extra:''})
}
 module.exports.criarNoticia = async (req, res) => {    
    const noticia = req.body

    const novaNoticia = await db.Noticia.create({
        titulo: noticia.titulo,     
        subTitulo: noticia.subTitulo,     
        autor: noticia.autor,     
        descricao: noticia.descricao,
        capa: noticia.capa,     
        idPerfis: 1
    });
    
    console.log(novaNoticia)
    res.redirect('/gamepadm/painel/sistema/0')
}
module.exports.painelSistema1 = async (req, res) => {
    const noticias = await db.Noticia.findAll({
        include:'Perfil'
    });
    console.log(noticias)
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '1', aba: 'sistema', opcoes: opSistema, extra:'', noticias})
}

// Visualizar admins e mudar role
module.exports.painelSistema2 = async (req, res) => {
    const userAdmin = await db.User.findAll({
        where: { role: 'ADMIN'},
        attributes: ['id', 'email','role'],
        include: [
            {model: db.Perfil, attributes: ['usuario']}
        ]
    })

    const userNorm = await db.User.findAll({
        where: { role: 'USER'},
        attributes: ['id', 'email','role'],
        include: [
            {model: db.Perfil, attributes: ['usuario']}
        ]
    })
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '2', aba: 'sistema', opcoes: opSistema, extra:'', userAdmin, userNorm})
}
module.exports.elevar = async (req, res) => {
    await db.User.update(
        {role: 'ADMIN'},
        {where: {id:req.params.id}
    })            
res.redirect('/gamepadm/painel/sistema/2')
}
module.exports.rebaixar = async (req, res) => {
    await db.User.update(
        {role: 'USER'},
        {where: {id:req.params.id}
    })            
res.redirect('/gamepadm/painel/sistema/2')
}

module.exports.painelSistema3 = (req, res) => {
    res.render('./adm/painelAdmin', {usuario: req.session.user, selecionado: '3', aba: 'sistema', opcoes: opSistema, extra:''})
}