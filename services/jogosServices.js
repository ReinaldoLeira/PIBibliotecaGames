const db = require('../models')
const { Op } = require('sequelize')

module.exports.criarJogoDB = async (data) => {
    const generos = [].concat(data.idGeneros)
    const plataformas = [].concat(data.idPlataformas )
    const jogo = data

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
}

module.exports.editarJogoDB = async (body, params) => {
const generos = [].concat(body.idGeneros)
const plataformas = [].concat(body.idPlataformas )
const jogo = body//mexendo
const jogoOriginal = await db.Jogo.findOne({        
    where: {id: params.id},
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
    {where: {id:params.id}
})
  
//remover generos que não tem mais
for(let i = 0; i < jogoOriginal.genero.length; i++){
    if(!generos.find((gen) => jogoOriginal.genero[i].id == gen)){
        await db.JogoGenero.destroy({
            where: {
                [Op.and]: [
                    {idJogos:params.id},
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
            idJogos: params.id,
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
                    {idJogos:params.id},
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
            idJogos: params.id,
            idPlataformas: plataformas[i]
        })
    }
}
}