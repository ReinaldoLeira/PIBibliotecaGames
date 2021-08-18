const models = require('../models')

module.exports.Atualizar = async (req,res) => {
    const body = req.body
    const adm = req.session.usuario
    console.log(body)

    try {
        if (body.email !== '' ){
            const acharEmail = await models.User.findOne({
                where: { email : body.email }
            })
            if (!acharEmail) {
                await models.User.update(
                    {email : body.email},
                    {where: { id: body.id } }
                    )
            }else{
                throw new Error ('email ja existe')
            }
        }
        if (body.usuario !== '' ){
            const acharUsuario = await models.Perfil.findOne({
                where: { usuario: body.usuario}
            })
            if (!acharUsuario) {
                await models.Perfil.update(
                    {usuario : body.usuario}, 
                    {where : { id : body.id }}
                )
            }else{
                throw new Error ('Usuario já existe')
            }
        }
        if ( body.role !== '' ){
            if (body.role == 'ADMIN'){
                await models.User.update(
                    { role: 'ADMIN'},
                    { where: { id: body.id }}
                )
            }
            if (body.role == 'USER') {
                await models.User.update(
                    {role: 'USER'},
                    {where: { id: body.id }}
                )
            }
        }
        if ( body.img !== '' ){
            await models.Perfil.update(
                {foto : body.img},
                {where: { id : body.id}}
            )
        }

        res.status(200).send({cadastro: 'Cadastrado'})
    } catch (e) {
        return res.status(400).send({message : e.message, status:400})   
    }
}
module.exports.Bloquear = async (req,res) => {
    const body = req.body
    try {
        await models.User.update(
            {blocked : '1' },
            {where: { idPerfis : body.id }}

        )
        await models.Perfil.update(
            {blocked: '1'},
            {where: { id : body.id}}

        )
        return res.status(200).send({message: 'BLOQUEADO'})

    } catch (e) {
        res.status(400).send({message: e.message, status:400})        
    }
}
module.exports.Desbloquear = async (req,res) => {
    const body = req.body
    try {
        await models.User.update(
            {blocked : '0' },
            {where: { idPerfis : body.id }}

        )
        await models.Perfil.update(
            {blocked: '0'},
            {where: { id : body.id}}

        )
        return res.status(200).send({message: 'BLOQUEADO'})

    } catch (e) {
        res.status(400).send({message: e.message, status:400})        
    }
}





module.exports.Deletar = async (req,res) => {
    const body = req.body
    
    try {
        await models.Perfil.destroy({
            include: ['User', 'Noticia', 'Post', 'Biblioteca', 'Analise', 'Midia']  ,
            where: { id: body.id}
        })
        return res.status(200).send({message: 'DELETADO'})
    } catch (e) {
        res.status(400).send({message: e.message, status:400})
    }

}