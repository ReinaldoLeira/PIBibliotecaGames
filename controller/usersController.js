const fs = require('fs');
const path =require('path');
const bcrypt = require('bcrypt');
const models = require('../models');
const { Op } = require('sequelize');
const e = require('express');


module.exports.sendConfigUsers = (async(req,res,next) => {

        const usuarioLogado = req.session.usuario
        const formBody = req.body
    try{ 
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
                throw new Error('Usuario ja encontrado')
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
            res.status(200).send({cadastro: 'Cadastrado'})
        })

    } catch (e) {
        return res.status(400).send({message : e.message, status:400})
    }
    })

module.exports.posts = (async (req, res, next) => {
        const usuario = req.session.usuario    
        res.render('./users/posts', {usuario: req.session.usuario})
});

module.exports.sendPosts = (async(req,res,next)=> { 

    const formBody = req.body;
    const usuarioLogado = req.session.usuario

    try{
        if (formBody.userPost == '' && formBody.tituloPost == '') {
            throw new Error('n??o pode ter campo Vazio')

        }
       
        await models.Post.create({
            descricao : formBody.userPost,
            titulo : formBody.tituloPost,
            idPerfis : usuarioLogado.id
        })
        res.status(200).send({criado:'criado', status:200})
    }catch (e) {
        res.status(400).send({message : e.message, status:400})
    }
})

module.exports.deletPost = (async(req,res,next)=> {
    const usuario = req.session.usuario
    const { id } = req.params      
    const achouPost = await models.Post.destroy({where: { id: id , idPerfis: usuario.id }})
    if(achouPost) {
        res.redirect('/users/posts')
    }else{
        res.send('n??o achou o post')
    }
})


module.exports.deletAnalise = (async(req,res)=> {
    const usuario = req.session.usuario
    const {id} = req.params
    const achouAnalise = await models.Analise.destroy ({where: { id: id, idPerfis: usuario.id }})
    if(achouAnalise) {
        res.redirect('/users/analise')
    }else{
        res.send('n??o achou')
    }
})

module.exports.analise = (async(req, res) => {
    const usuario = req.session.usuario
                
    res.render('./users/analise', {usuario: req.session.usuario}) 
});

module.exports.criarAnalise = (async(req,res,next)=> {
    const usuario = req.session.usuario
    const formBody = req.body
    try {
        if(formBody.nota > 5){
            throw new Error('n??o pode mais que 5')
        }
        await models.Analise.create({

            titulo: formBody.titulo,
            analise: formBody.analise,
            nota: formBody.nota,
            idJogos: formBody.idJogo,
            blocked: '0',
            idPerfis: usuario.id,        
        })
        res.status(200).send({criado: 'criado', status: 200})
    } catch (e) {
        res.send(400).send({message : e.message, status: 400})
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
    
    if (formBody.tipo == 'VIDEO') {
        
        const tipvideo = formBody.url;
        const array = tipvideo.split('?v=', 2)
        const finalArray = array[1].split('&', 2)
        const url = finalArray[0]

        const criarMidia = await models.Midia.create({
            tipo: 'VIDEO',
            path: url, 
            idPerfis: usuario.id,
            idJogos: formBody.selectJogo,
            titulo: formBody.titulo
        })
        return res.redirect('/users/midias')
    }
    if (formBody.tipo == 'IMAGEM'){

        const criarMidia = await models.Midia.create({
            tipo: 'IMAGEM',
            path: formBody.url, 
            idPerfis: usuario.id,
            idJogos: formBody.selectJogo,
            titulo: formBody.titulo
        })
        return res.redirect('/users/midias')
    }

    return res.redirect('/users/midias')
}

module.exports.deletMidia = async(req, res) => {

    const usuario = req.session.usuario
    const {id} = req.params
    const achouMidia = await models.Midia.destroy ({where: { id: id, idPerfis: usuario.id }})
    if(achouMidia) {
        res.redirect('/users/midias')
    }else{
        res.send('n??o achou')
    }

}

module.exports.meusJogos = (req, res) => {res.render('./users/meusJogos', {usuario: req.session.usuario})};
module.exports.addMeusJogos = async(req, res) => { 
    const formBody = req.body
    const usuario = req.session.usuario
    console.log(formBody)

    try {
        const acharBiblioteca = await models.Biblioteca.findOne({where: { idPerfis : usuario.id}})
        await models.BibliotecaJogo.create({
        plataforma: formBody.plataforma,
        idBibliotecas: acharBiblioteca.id,
        idJogos: formBody.jogo,
        obtido: formBody.escolha
    })
    console.log(formBody)
        res.status(200).send({criado: 'criado', status: 200})
    } catch (e) {
        res.send(400).send({message : e.message, status: 400})
    }
    
}

module.exports.deletarMeuJogo = async (req,res) => {
    const usuario = req.session.usuario
    const {id} = req.params
    
    
   
        const acharBiblioteca = await models.Biblioteca.findOne({where : { id : usuario.id}})
        const deletarBiblioteca = await models.BibliotecaJogo.destroy ({where: { id: id, idBibliotecas: acharBiblioteca.id }})
        if(deletarBiblioteca){
            res.redirect('/users/meusJogos')
        }else{
            
        }      
    

}

//Controller de rotas analise>>formAnalise>>meusJogos>>posts>>Usuario

module.exports.formAnalise = (req, res) => {res.render('./users/form-analise', {usuario: req.session.usuario}) };


module.exports.usuario =  (req, res) => {res.render('./users/usuario', {usuario: req.session.usuario})};


//adicionar aos favoritos