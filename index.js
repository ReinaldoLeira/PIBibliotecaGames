const db = require('./models')
const { Op } = require('sequelize')


db.user.create({

    usuario: 'juliout',
    senha: '1234',
    email: 'julio@julio',
    blocked: '1',
    role: '1',
    perfis_id: '1'

})