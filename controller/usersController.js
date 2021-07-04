const fs = require('fs');
const path =require('path');
const bcrypt = require('bcrypt');
const jogos = require('../model/jogos.json')
const noticias = require('../model/noticias.json')
const models = require('../models')
const { Op } = require('sequelize');
const perfil = require('../models/perfil');



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
    error:{
    content:{email: ''}
    }
    })
};

module.exports.logar = (async(req, res) => {

    const formBody =req.body; //requisição do corpo do formulario front end
   
    const FindUser = await models.User.findOne({include: 'Perfil' , where: { email: formBody.email } }) //const para achar o email
   

    if(!formBody.email || !formBody.senha){
        return res.send('campos vazios')
    } // se o campo 'email' e o campo 'senha' estiverem vazio ele retorna uma mensagem de erro'
    if (!FindUser) {
        return res.send('email ou senha errado ou inexistente');
    }
    if (!bcrypt.compareSync(formBody.senha, FindUser.senha)){ // compara a senha hash
        return res.send('email ou senha errado ou inexistente');      
    }
    req.session.usuario = FindUser // cria a sessão Usuario
    console.log(FindUser)
    res.redirect ('/users')      

});
//Controle das rotas GET >> POST
module.exports.registrar = (req, res) => { res.render('./users/cadastrar', { usuario: ''})};

module.exports.registrado = (async (req, res) => { 

    const formBody = req.body; //requisição do corpo do formulario front end
    console.log(formBody)

    if (formBody.senha !== formBody.resenha) {     //aqui, se a senha ea resenha do body estiverem errados, ele retorna um erro.
        return res.send('senha e resenha diferentes')
    }
    const comparacaoUsuario = await models.User.findOne({ where: { usuario: formBody.usuario } }); //
                                                                                                    // acha o usuario e a senha no banco de dados com as
    const comparacaoEmail = await models.User.findOne({ where: { email: formBody.email } })     //          informações vinda do body
    
    if (!formBody.email || !formBody.senha  || !formBody.resenha || !formBody.usuario ){
        return res.send ('todos os campos são obrigatorios')
    }  
    
    if (comparacaoUsuario) {
        return res.send ('usuario ja existe')        //
    }                                                   // aqui, ele executa a funcação de procuar, e se tiver ele retorna um erro e para a função
    if (comparacaoEmail) {                           //
        return res.send ('email já existe')        
    }

    
    
    const hash = bcrypt.hashSync(formBody.senha, 10); // aqui ele reescreve a senha em hash

    const perfil = await models.Perfil.create({
        blocked : '0'
    })

    const perfilCriado =  (value) =>{
        if(value) {
            console.log('perfilCriado')
            return value.id
        }else{
            return console.log('perfil não foi criado')
        }

    }

    await models.User.create({ // aqui vai criar o usuario, usando o model

        usuario: formBody.usuario,
        senha: hash,
        email: formBody.email,
        blocked: '0',
        role: 'USER',
        idPerfis: perfilCriado(perfil)
             
    })
    
    res.send('usuario criado')


    });

    module.exports.sendConfigUsers = (async(req,res,next) => {

        const usuarioLogado = req.session.usuario
        const formBody = req.body
        console.log(usuarioLogado)

        if(!formBody.urlImg == ''){
        
            usuarioLogado.Perfil.Foto = formBody.urlImg
            models.Perfil.update({
                foto: formBody.urlImg
            },{
            where : {id : usuarioLogado.idPerfis}})
        }

        if (!formBody.usuario == '') {
            const procurarUser = models.User.findOne({where: { usuario: formBody.usuario}});
            if (!procurarUser) {
                models.User.update({
                    usuario: formBody.usuario
                },{
                    where: {id: usuarioLogado.id}
                })
            }else {
                console.log('usuario ja existente')
            }
        }
        
        if(!formBody.sobreMim == '') {

            models.Perfil.update({
                sobre : formBody.sobreMim
            },
                { where: {id: usuarioLogado.Perfil.id}
            })
        }
        if(!formBody.urlInsta == '') {

            models.Perfil.update({
                instagram : formBody.urlInsta
            },
                { where: {id: usuarioLogado.Perfil.id}
            })

        }
        if(!formBody.urlTwitter == '') {
            models.Perfil.update({
                twitter : formBody.urlTwitter
            },
                { where: {id: usuarioLogado.Perfil.id}
            })

        }
        if(!formBody.urlFace == '') {
            models.Perfil.update({
                facebook : formBody.urlFace
            },
                { where: {id: usuarioLogado.Perfil.id}
            })
        }
        
    });

//Controller de rotas analise>>formAnalise>>meusJogos>>posts>>Usuario
module.exports.analise = (req, res) => {res.render('./users/analise', {usuario: req.session.usuario}) };
module.exports.formAnalise = (req, res) => {res.render('./users/form-analise', {usuario: req.session.usuario}) };
module.exports.meusJogos = (req, res) => {res.render('./users/meusJogos', {usuario: req.session.usuario})};
module.exports.posts = (req, res) => {res.render('./users/posts', {usuario: req.session.usuario}) };
module.exports.usuario =  (req, res) => {res.render('./users/usuario', {usuario: req.session.usuario})};
module.exports.userMidias =  (req, res) => {res.render('./users/userMidia', {usuario: req.session.usuario})};