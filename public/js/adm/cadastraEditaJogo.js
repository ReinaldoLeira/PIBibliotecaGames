//Utilizado em adm/jogo0, adm/jogo1edit e jogo/cadastraJogo

document.querySelector('textarea').onkeyup = () => {
    document.querySelector('textarea').style.height = (document.querySelector('textarea').scrollHeight) + 'px'
}

const nome = document.querySelector(`#nomeJogo`)
const publisher = document.querySelector(`#publisherJogo`)
const data = document.querySelector(`#dataJogo`)
const sinopse = document.querySelector(`#sinopseJogo`)
const imgJogo = document.querySelector(`#imgJogo`)
const plataformas = document.querySelectorAll(`.checkboxPlataformas`)
const generos = document.querySelectorAll(`.checkboxGeneros`)
const botaoSalvar = document.querySelector(`#salvarJogo`)
const erros = document.querySelectorAll(`.errosCadastroJogos`)

botaoSalvar.onmouseover = verificarErros
for(let plataforma of plataformas){
    plataforma.onchange = verificarErros
}
for(let genero of generos){
    genero.onchange = verificarErros
}

function verificarErros() {
    validarCampos()
    for(let erro of erros){
        if(erro.innerText != ''){
            return botaoSalvar.disabled = true
        }
    }
    botaoSalvar.disabled = false
}

function validarCampos(){
    if(!nome.value || nome.value > 120){
        document.querySelector(`#erroNome`).innerText = 'Digite o nome do Jogo.(max 120 caracteres)'
        nome.onkeyup = verificarErros
        return 
    }
    document.querySelector(`#erroNome`).innerText = ''

    if(!publisher.value || publisher.value > 120){
        document.querySelector(`#erroPublisher`).innerText = 'Digite o nome da Desenvolvedora.(max 120 caracteres)'
        publisher.onkeyup = verificarErros
        return 
    }
    document.querySelector(`#erroPublisher`).innerText = ''

    if(!data.value || data.value > 10){
        document.querySelector(`#erroData`).innerText = 'Digite data de lançamento.(dd/mm/aaaa)'
        data.onkeyup = verificarErros
        return 
    }
    document.querySelector(`#erroData`).innerText = ''

    if(!sinopse.value || sinopse.value > 500){
        document.querySelector(`#erroSinopse`).innerText = 'Digite uma sinopse.(max 500 caracteres)'
        sinopse.onkeyup = verificarErros
        return 
    }
    document.querySelector(`#erroSinopse`).innerText = ''

    if(!imgJogo.value || imgJogo.value > 500){
        document.querySelector(`#erroImgJogo`).innerText = 'Coloque o link da imagem.(max 500 caracteres)'
        imgJogo.onkeyup = verificarErros
        return 
    }
    document.querySelector(`#erroImgJogo`).innerText = ''


    for(let plataforma of plataformas){
        if(plataforma.checked){
            document.querySelector(`#erroPlataformas`).innerText = ''
            break
        }
        document.querySelector(`#erroPlataformas`).innerText = 'Selecione uma ou mais plataformas'
    }

    for(let genero of generos){
        if(genero.checked){
            document.querySelector(`#erroGeneros`).innerText = ''
            break
        }
        document.querySelector(`#erroGeneros`).innerText = 'Selecione um ou mais generos'
    }
}