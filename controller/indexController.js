const models = require('../models');
const bcrypt = require('bcrypt');

module.exports.index = async (req, res) => { 
    const top =  await models.Jogo.findAll() 
    const noticias = await models.Noticia.findAll()
    res.render ('index', {
        usuario: req.session.usuario,
        jogos: top,
        noticias: noticias
    })};
//controllers Registrar
module.exports.registrar = (req, res) => { res.render('./home/cadastrar', { usuario: ''})};

module.exports.registrado = (async (req, res) => { 
    try{
        const formBody = req.body;
        if (!formBody.email || !formBody.senha  || !formBody.resenha || !formBody.usuario ){
            throw new Error('Todos os dados são obrigatorios')
        }
        if (formBody.senha !== formBody.resenha) {     
            throw new Error('senha e resenha erradas')
        }
        const comparacaoUsuario = await models.Perfil.findOne({ where: { usuario: formBody.usuario } });  
        if (comparacaoUsuario) {
            throw new Error('Ja existe o Usuario')   
        }
        const comparacaoEmail = await models.User.findOne({ where: { email: formBody.email } })
        if (comparacaoEmail) {                           
            throw new Error('E-mail ja existe')      
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
        res.status(200).send({cadastro: 'Cadastrado'})  
        }catch (e) {
            return res.status(400).send({message : e.message, status:400})
        }
   
        });

//controllers login
module.exports.login = (req, res) => { res.render('./home/login', {
    usuario: req.session.usuario,
    error:{msg : '' }
    })
};

module.exports.logar = (async(req, res) => {    
    try{
        const formBody = req.body
        const findUser = await models.User.findOne({ where: { email: formBody.email } })
        if(!formBody.email || !formBody.senha){
            throw new Error('caixa vazia')
        }
        if (!findUser) {
            throw new Error('não achei o usuario')
        }
        if (!bcrypt.compareSync(formBody.senha, findUser.senha)){        
            throw new Error('senha errada')
        }
        const findPerfil = await models.Perfil.findOne({ where: { id : findUser.id} })
        if(findPerfil.blocked == '1'){
            throw new Error('Usuario Bloqueado')
        }
        req.session.usuario = findPerfil 
        return res.status(200).send({message: 'usuario Logado'}) 
        }catch (e) {
            return res.status(400).send({message : e.message, status:400})
        }
                   

});
module.exports.deletar = async (req,res) => {
    try {
        const idBody = req.body.id
        const deletarUsuario = await models.User.destroy({
            include: 'Perfil',
            where: { id : idBody  }
        })
        if(deletarUsuario){
           return res.status(200).send('deletado')
        }else {
            throw new Error ('Não foi possivel Deletar')
        }
    } catch (e) {
        return res.status(400).send({message : e.message, status:400})
    }
}