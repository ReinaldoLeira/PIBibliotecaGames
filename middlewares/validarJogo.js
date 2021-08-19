function validarJogo (req, res, next){
    const body = req.body
    const plataforma = [].concat(body.idPlataformas)
    const genero = [].concat(body.idGeneros)

    if(!body.nome){
        return res.redirect('back')
    }
    if(body.nome.length > 120){
        return res.redirect('back')
    }
    
    if(!body.desenvolvedor){
        return res.redirect('back')
    }
    if(body.desenvolvedor.length > 120){
        return res.redirect('back')
    }    

    if(!body.lancamento){
        return res.redirect('back')
    }
    if(body.lancamento.length > 10){
        return res.redirect('back')
    } 

    if(!body.descricao){
        return res.redirect('back')
    }
    if(body.descricao.length > 500){
        return res.redirect('back')
    } 

    if(!body.capa){
        return res.redirect('back')
    }
    if(body.capa.length > 500){
        return res.redirect('back')
    } 

    if(!plataforma[0]){
        return res.redirect('back')
    }

    if(!genero[0]){
        return res.redirect('back')
    }

    return next()
}

module.exports = validarJogo;