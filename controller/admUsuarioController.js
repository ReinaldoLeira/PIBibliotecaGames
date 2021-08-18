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