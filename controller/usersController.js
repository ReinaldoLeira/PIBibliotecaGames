const fs = require('fs');
const path =require('path');
const {v4: uuidv4} = require('uuid');
const usersJson = require('../model/users.json');
const bcrypt = require('bcrypt');
const jogos = require('../model/jogos.json')
const noticias = require('../model/noticias.json')
const street = path.join(__dirname, '..', 'model', 'users.json' );


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

module.exports.logar = (req, res) => {

    let {email, senha} =req.body;
    for (let usuario of usersJson) {

    if (email != usuario.email) {
        return res.render('./users/login', {
            usuario: req.session.usuario,
            error: {
                email : 'email errado',
                content: req.body
            },   
        });
    }
    if (!bcrypt.compareSync(senha, usuario.senha)){
        return res.render('./users/login', {
            usuario: req.session.usuario,
            error: {
                senha : 'senha errada',
                content: req.body
            },
        });
    }  

    req.session.usuario = usuario
    res.redirect ('/users')       
}
};
//Controle das rotas GET >> POST
module.exports.registrar = (req, res) => { res.render('./users/cadastrar', {
    usuario: req.session.usuario,    
    error:{
        content:{email: '', senha:''}
        }
})
};
module.exports.registrado = (req, res) => { 

   const { email, nick, senha, resenha} = req.body;
    const fUser = usersJson.find ( (user) =>  user.email === email )
    const fNick = usersJson.find ( (user) =>  user.nick === nick )

    
    if (fUser) {
        return res.render('./users/cadastrar', {
            usuario: req.session.usuario,
            error: {
                email: 'Esse email já existe',
                content: req.body
            },
            
        })
    }
    if (fNick) {
        
        return res.render('./users/cadastrar',{
            usuario: req.session.usuario,
            error: {
                nick: 'Usuario já existente',
                content: req.body
            },
            
        })
    }
    if (senha !== resenha) {
        
        return res.render('./users/cadastrar', {
            usuario: req.session.usuario,
            error: {
                resenha : ' senhas não são iguais',
                content: req.body
            },
            
        })
    }
    const hash = bcrypt.hashSync(senha, 10);
    const newUser = {
        id: uuidv4(),
        ...req.body,
        senha:hash
    };

    delete newUser.resenha;
    delete newUser.checkBox

    usersJson.push (newUser);
    fs.writeFileSync (street, JSON.stringify(usersJson));
    console.log ('registrado')
    
    res.redirect('/')

};

//Controller de rotas analise>>formAnalise>>meusJogos>>posts>>Usuario
module.exports.analise = (req, res) => {res.render('./users/analise', {usuario: req.session.usuario}) };
module.exports.formAnalise = (req, res) => {res.render('./users/form-analise', {usuario: req.session.usuario}) };
module.exports.meusJogos = (req, res) => {res.render('./users/meusJogos', {usuario: req.session.usuario})};
module.exports.posts = (req, res) => {res.render('./users/posts', {usuario: req.session.usuario}) };
module.exports.usuario =  (req, res) => {res.render('./users/usuario', {usuario: req.session.usuario})};