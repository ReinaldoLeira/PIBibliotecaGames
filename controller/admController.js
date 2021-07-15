const usersArray = require('../model/users.json')
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
    const generos = [].concat(req.body.idGeneros)
    const plataformas = [].concat(req.body.idPlataformas )
    const jogo = req.body

    const novoJogo = await db.Jogo.create({
        nome: jogo.nome,
        desenvolvedor: jogo.desenvolvedor,        
        descricao: jogo.descricao,
        lancamento: jogo.lancamento,
        capa: jogo.capa,     
        validado: 0,   
        createdBy: 'testeAdmin' 
    })  
    
    for(let i = 0; i < generos.length; i++ ){
        await db.JogoGenero.create({
            idJogos: novoJogo.id,
            idGeneros: generos[i]
    })}
    
    for(let i = 0; i < plataformas.length; i++){
        await db.JogoPlataforma.create({
            idJogos: novoJogo.id,
            idPlataformas: plataformas[i]
    })}
    res.redirect('/gamepadm/painel/jogo/0')
}

//jogo-listar
module.exports.painelJogo1 = async (req, res) => {
    const jogos = await db.Jogo.findAll({
        include:['genero','plataforma']
    })    
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '1', aba: 'jogo', opcoes: opJogo, extra:'', jogos})
}
module.exports.editarJogo = async (req, res) => {
    const plataformas = await db.Plataforma.findAll()
    const generos = await db.Genero.findAll()
    const jogo = await db.Jogo.findOne({        
        where: {id: req.params.id},
        include:['genero','plataforma']
    })        
    res.render('./adm/painelAdmin', {usuario: req.session.usuario, selecionado: '1', aba: 'jogo', opcoes: opJogo, extra:'edit', jogo, plataformas, generos})
}
module.exports.salvarJogo = async (req, res) => {
    const generos = [].concat(req.body.idGeneros)
    const plataformas = [].concat(req.body.idPlataformas )
    const jogo = req.body//mexendo
    const jogoOriginal = await db.Jogo.findOne({        
        where: {id: req.params.id},
        include:['genero','plataforma']
    })  
    
    //update na tabela jogos
    await db.Jogo.update(
        {
            nome: jogo.nome,
            desenvolvedor: jogo.desenvolvedor,        
            descricao: jogo.descricao,
            lancamento: jogo.lancamento,
            capa: jogo.capa,     
            validado: jogo.validado != 1 ? 0 : jogo.validado
        },
        {where: {id:req.params.id}
    })
      
    //remover generos que não tem mais
    for(let i = 0; i < jogoOriginal.genero.length; i++){
        if(!generos.find((gen) => jogoOriginal.genero[i].id == gen)){
            await db.JogoGenero.destroy({
                where: {
                    [Op.and]: [
                        {idJogos:req.params.id},
                        {idGeneros: jogoOriginal.genero[i].id}
                    ]
                }
            })
        }
    }
       
    //cadastrar generos novos no jogo
    for(let i = 0; i < generos.length; i++){
        if(!jogoOriginal.genero.find((gen) => generos[i] == gen.id)){
            await db.JogoGenero.create({
                idJogos: req.params.id,
                idGeneros: generos[i]
            })
        }
    }
   
    //remover plataformas que não tem mais
    for(let i = 0; i < jogoOriginal.plataforma.length; i++){
        if(!plataformas.find((plat) => jogoOriginal.plataforma[i].id == plat)){
            await db.JogoPlataforma.destroy({
                where: {
                    [Op.and]: [
                        {idJogos:req.params.id},
                        {idPlataformas: jogoOriginal.plataforma[i].id}
                    ]
                }
            })
        }
    }

    //cadastrar generos novos no jogo
    for(let i = 0; i < plataformas.length; i++){
        if(!jogoOriginal.plataforma.find((plat) => plataformas[i] == plat.id)){
            await db.JogoPlataforma.create({
                idJogos: req.params.id,
                idPlataformas: plataformas[i]
            })
        }
    }
        
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