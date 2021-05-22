    const fs = require('fs');
    const path =require('path');
    let usersJson = path.join('model/users.json')
    const bcrypt = require('bcrypt');

//Controller para index
module.exports.index = (req, res) => { res.render ('index')};

//Controle das rota GET >> POST
module.exports.login = (req, res) => { res.render('./users/login', {

    error:{},
    content:{}

    })
};

module.exports.logar = (req, res) => {

    let {email, senha} =req.body;
    let usuarioSalvo = fs.readFileSync(usersJson, {encoding: 'utf-8'});
    usuarioSalvo = JSON.parse(usuarioSalvo);
    for (let usuario of usuarioSalvo) {

    if(email != usuario.email) {
        return res.render('./users/login', {
            error: {
                email : 'email errado',
                content: req.body
            },
            
        });
    }
    if(!bcrypt.compareSync(senha, usuario.senha)){
        return res.render('./users/login', {
            error: {
                senha : 'senha errada',
                content: req.body
            },
            
        });
    }
     
    req.session.usuario = usuario
    res.redirect('/users')   
    
}
};

//Controle das rotas GET >> POST
module.exports.registrar = (req, res) => { res.render('./users/cadastrar', {

    error: {},
    content: {}
    
})
};
module.exports.registrado = (req, res) => { 

    let { email, nick, senha, resenha} = req.body;

    if (senha != resenha) {
        return res.render('./users/cadastrar', {
            error: {
                resenha : ' senhas não são iguais',
                content: req.body
            },
            
       
        });
    }
        
    let rawData = fs.readFileSync(usersJson); 
    let novoUsuario = JSON.parse(rawData);
    let senhaC = bcrypt.hashSync (senha, 10);
    let usuario = {email, nick, senha:senhaC};
    novoUsuario.push(usuario);     

    fs.writeFileSync(usersJson, JSON.stringify(novoUsuario));
    console.log('foi cadastrado');
    res.redirect ('/');
};

//Controller de rotas analise>>formAnalise>>meusJogos>>posts>>Usuario
module.exports.analise = (req, res) => {res.render('./users/analise') };
module.exports.formAnalise = (req, res) => {res.render('./users/form-analise') };
module.exports.meusJogos = (req, res) => {res.render('./users/meusJogos')};
module.exports.posts = (req, res) => {res.render('./users/posts') };
module.exports.usuario =  (req, res) => {res.render('./users/usuario')};