const fs = require('fs');
const path =require('path');
const bcrypt = require('bcrypt');
const jogos = require('../model/jogos.json')
const noticias = require('../model/noticias.json')
const models = require('../models')
const { Op } = require('sequelize');


//Controller para index
module.exports.index = (req, res) => { 
    const top = jogos
    const noticia = noticias
    res.render ('index', {
        usuario: req.session.usuario,
        jogos: top,
        noticias: noticia
    })};

//Controle das rota GET >> POST
module.exports.login = (req, res) => { res.render('./users/login', {
    usuario: req.session.usuario,
    error:{msg : '' }
    })
};

module.exports.logar = (async(req, res) => {

    const formBody =req.body;
    const findUser = await models.User.findOne({ where: { email: formBody.email } })
    
    if(!formBody.email || !formBody.senha){
        return res.render('./users/login', {usuario:'', error: 'campos vazios' });
    }
    if (!findUser) {
        return res.render('./users/login', {usuario:'', error: 'usuario ja existe' });
    }
    if (!bcrypt.compareSync(formBody.senha, findUser.senha)){        
        return res.render('./users/login', {usuario:'', error: 'senha errada'});    
    }
    const findPerfil = await models.Perfil.findOne({ where: { id : findUser.id} })
    req.session.usuario = findPerfil 
        
    return res.redirect ('/users')      

});
//Controle das rotas GET >> POST
module.exports.registrar = (req, res) => { res.render('./users/cadastrar', { usuario: '', error:''})};

module.exports.registrado = (async (req, res) => { 
    const formBody = req.body;
    const comparacaoUsuario = await models.Perfil.findOne({ where: { usuario: formBody.usuario } });                                                                                                     
    const comparacaoEmail = await models.User.findOne({ where: { email: formBody.email } })

    if (!formBody.email || !formBody.senha  || !formBody.resenha || !formBody.usuario ){
        return res.render('./users/cadastrar', {usuario:'', error: 'senhas incompativeis'})
    }
    if (formBody.senha !== formBody.resenha) {     
        return res.render('./users/cadastrar', {usuario:'', error: 'senhas incompativeis'})
    }
    if (comparacaoUsuario) {
        return res.render('./users/cadastrar', {usuario:'', error: 'usuario ja existe'})     
    }
    if (comparacaoEmail) {                           
        return res.render('./users/cadastrar', {usuario:'', error: 'usuario ja existe'})        
    }
    const hash = bcrypt.hashSync(formBody.senha, 10);
    const perfil = await models.Perfil.create({
        blocked : '0',
        usuario: formBody.usuario
    })

    const perfilCriado =  (value) =>{
        if(value) {
            console.log('perfilCriado')
            return value.id
        }else{
            return console.log('perfil não foi criado')
        }

    }
    await models.User.create ({ 
        senha: hash,
        email: formBody.email,
        blocked: '0',
        role: 'USER',
        idPerfis: perfilCriado(perfil)

    })
    await models.Biblioteca.create({
        idPerfis: perfil.id
    })  

    return res.redirect('/login')

    });

    module.exports.sendConfigUsers = (async(req,res,next) => {

        const usuarioLogado = req.session.usuario
        const formBody = req.body
        
        if (!formBody.urlImg == ''){
            await models.Perfil.update({
                foto: formBody.urlImg
            },{
            where : {id : usuarioLogado.id}})
        }
        if (!formBody.usuario == '') {
            const procurarPerfil = await models.Perfil.findOne({ where: { usuario: formBody.usuario }});   
            if(!procurarPerfil){
                await models.Perfil.update({
                    usuario : formBody.usuario
                },
                    { where: {id: usuarioLogado.id}
                })   
            }else{
                return res.render('./users/usuario', {usuario: req.session.usuario, error: 'tem error'})
            }
        }
        
        if (!formBody.sobreMim == '') {
            await models.Perfil.update({
                sobre : formBody.sobreMim
            },
                { where: {id: usuarioLogado.id}
            })
        }
        if (!formBody.urlInsta == '') {
            await models.Perfil.update({
                instagram : formBody.urlInsta
            },
                { where: {id: usuarioLogado.id}
            })
        }
        if (!formBody.urlTwitter == '') {
            await models.Perfil.update({
                twitter : formBody.urlTwitter
            },
                { where: {id: usuarioLogado.id}
            })
        }
        if (!formBody.urlFace == '') {
            await models.Perfil.update({
                facebook : formBody.urlFace
            },
                { where: {id: usuarioLogado.id}
            })
        }
        const findPerfil = await models.Perfil.findOne({ where : { id: usuarioLogado.id} })
        
        req.session.save(function() {
            req.session.usuario = findPerfil       
            res.redirect('/users')
        })
    })
module.exports.sendPosts = (async(req,res,next)=> { 

    const formBody = req.body;
    const usuarioLogado = req.session.usuario

    if(formBody.userPost !== '' && formBody.tituloPost !== '') {
        await models.Post.create({
            descricao : formBody.userPost,
            titulo : formBody.tituloPost,
            idPerfis : usuarioLogado.id
        })
                
    }else { 
        console.log('não foi escrito :)')
    }
    res.redirect('/users/posts')


})

module.exports.posts = (async (req, res, next) => {

    const usuario = req.session.usuario    
    res.render('./users/posts', {usuario: req.session.usuario})
 });

module.exports.deletPost = (async(req,res,next)=> {
    const usuario = req.session.usuario
    const { id } = req.params      
    const achouPost = await models.Post.destroy({where: { id: id , idPerfis: usuario.id }})
    if(achouPost) {
        res.redirect('/users/posts')
    }else{
        res.send('não achou o post')
    }
})


module.exports.deletAnalise = (async(req,res)=> {
    const usuario = req.session.usuario
    const {id} = req.params
    const achouAnalise = await models.Analise.destroy ({where: { id: id, idPerfis: usuario.id }})
    if(achouAnalise) {
        res.redirect('/users/analise')
    }else{
        res.send('não achou')
    }
})


module.exports.analise = (async(req, res) => {
    const usuario = req.session.usuario
                
    res.render('./users/analise', {usuario: req.session.usuario}) 
});

module.exports.criarAnalise = (async(req,res,next)=> {
    const usuario = req.session.usuario
    const formBody = req.body
    console.log(formBody)
    
    const jogo = await models.Jogo.findOne({
        where: {id : formBody.idJogo}
    })
    console.log(jogo)

    const criarAnalise = await models.Analise.create({

        titulo: formBody.titulo,
        analise: formBody.analise,
        nota: formBody.nota,
        idJogos: formBody.idJogo,
        blocked: '0',
        idPerfis: usuario.id,
        imgJogo: jogo.capa
    })
    console.log(criarAnalise.toJSON())
    if(criarAnalise){
        res.redirect('/users/analise')
    }else{
        return res.send('não foi criado')
    }


})

module.exports.sair = async (req, res) => {
    const usuario = req.session.usuario 
    req.session.destroy(function(){
        res.redirect('/')
    }) 
}

module.exports.userMidias =  (req, res) => {res.render('./users/userMidia', {usuario: req.session.usuario})};
module.exports.criarMidia = async (req, res) => {
    const usuario = req.session.usuario;
    const formBody = req.body;
    console.log(formBody)
    const criarMidia = await models.Midia.create({
        tipo: formBody.tipo,
        path: formBody.url, 
        idPerfis: usuario.id,
        idJogos: formBody.selectJogo
    })

    if(criarMidia) {
        res.redirect('/users/midias')
    }
}

module.exports.deletMidia = async(req, res) => {

    const usuario = req.session.usuario
    const {id} = req.params
    const achouMidia = await models.Midia.destroy ({where: { id: id, idPerfis: usuario.id }})
    if(achouMidia) {
        res.redirect('/users/midias')
    }else{
        res.send('não achou')
    }

}

module.exports.meusJogos = (req, res) => {res.render('./users/meusJogos', {usuario: req.session.usuario})};
module.exports.addMeusJogos = async(req, res) => { 
    const formBody = req.body
    const usuario = req.session.usuario
    console.log(formBody)
    const acharBiblioteca = await models.Biblioteca.findOne({where: { idPerfis : usuario.id}})
    const criarMinhaBiblioteca = await models.BibliotecaJogo.create({
        plataforma: formBody.plataforma,
        idBibliotecas: acharBiblioteca.id,
        idJogos: formBody.jogo,
        obtido: formBody.escolha
    })
    if (criarMinhaBiblioteca){
        res.redirect ('/users/meusjogos')
    }
    
}

module.exports.deletarMeuJogo = async (req,res) => {
    const usuario = req.session.usuario
    const {id} = req.params
    
    
    try {
        const acharBiblioteca = await models.Biblioteca.findOne({where : { id : usuario.id}})
        const deletarBiblioteca = await models.BibliotecaJogo.destroy ({where: { id: id, idBibliotecas: acharBiblioteca.id }})
        return res.redirect('/users/meusjogos')
    }catch{
        return res.redirect('/users/meusjogos')
    }


}

//Controller de rotas analise>>formAnalise>>meusJogos>>posts>>Usuario

module.exports.formAnalise = (req, res) => {res.render('./users/form-analise', {usuario: req.session.usuario}) };


module.exports.usuario =  (req, res) => {res.render('./users/usuario', {usuario: req.session.usuario, error:'' })};
