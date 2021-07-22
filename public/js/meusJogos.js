const meusJogos = document.getElementById('meusJogos')
const tituloJogos = document.getElementById('tituloJogos')
const tituloDesejo = document.getElementById('tituloDesejos')
const meusDesejos = document.getElementById('meusDesejos')

tituloDesejo.onclick = () => {
    meusJogos.style.display = 'none'
    meusDesejos.style.display = 'flex'

}

tituloJogos.onclick = () => {
    meusJogos.style.display = 'flex'
    meusDesejos.style.display = 'none'
    
}
const caixaSelecionarJogo = document.querySelector('.caixaSelecionarJogo')

async function acharJogo() {
    const resultado = await fetch("http://localhost:3000/apis/jogos")
    const body = await resultado.json()
    console.log(body)
    
    for (const jogo of body) {
        caixaSelecionarJogo.innerHTML += `
        <div class="inputRadio">
            <input type="radio" value= "${jogo.id}" name="jogo" id="${jogo.id}" class="radioSelectJogo" required>
            <label for="${jogo.id}" class="labelRadio">            
                <img src="${jogo.capa}" alt="">
                <span class="TituloInputRadio">${jogo.nome}</span>
            </label>
        </div>`
    }
}

acharJogo()
const plataformaJogo = document.querySelector('#plataformaJogo')
async function listarPlataformas() {
    const resultado = await fetch("http://localhost:3000/apis/plataformas")
    const body = await resultado.json()

    for (const plataforma of body) {
        plataformaJogo.innerHTML+= `
        <option value="${plataforma.nome}">${plataforma.nome}</option>
        `
    }

}
listarPlataformas()


const botaoNext = document.querySelector('.next')
const contentJogo = document.querySelector('.contentJogo')
const contentJogoFinal = document.querySelector('.contentJogoFinal')
const botaoClose = document.querySelector('.close')

const botaoClose2 = document.querySelector('.close2')

botaoNext.onclick = () => {
    contentJogo.style.display = 'none'
    contentJogoFinal.style.display = 'flex'
}
const modal = document.querySelector('#modal')

botaoClose.onclick = () => {   
    modal.style.display = 'none'
}
botaoClose2.onclick = () => {   
    modal.style.display = 'none'
}


const botaoAddJogo = document.querySelector('.botaoAddJogo')

botaoAddJogo.onclick = () => {
    modal.style.display = "block"
}

const botaoVoltar = document.querySelector('.imgVoltar')

botaoVoltar.onclick = () =>{
    contentJogo.style.display = 'block'
    contentJogoFinal.style.display ='none'
}

async function showJogos () {
    const minhaBiblioteca = await fetch ('http://localhost:3000/apis/minhabiblioteca')
    const bodyBiblioteca = await minhaBiblioteca.json()

    for (const biblioteca of bodyBiblioteca) {
        if (biblioteca.obtido == 'SIM'){
            meusJogos.innerHTML += `
                <div class="showBox"> 
                    <a href="http://localhost:3000/jogos/perfil/${biblioteca.Jogo.id}">
                        <form action="/users/meusjogos/deletar/${biblioteca.id}" method ="POST"><button type="submit">x</button></form>
                        <div class="imgJogo" id="imgJogo"><img src="${biblioteca.Jogo.capa}" alt="" srcset="" /></div>
                        <div class="nomeJogo"><p>${biblioteca.Jogo.nome}</p></div>
                    </a>
                </div> 
                `
        }
        if (biblioteca.obtido == 'DESEJO'){
            
            meusDesejos.innerHTML += `
                <div class="showBox">                            
                    <a href="http://localhost:3000/jogos/perfil/${biblioteca.Jogo.id}">
                        <form action="/users/meusjogos/deletar/${biblioteca.id}" method ="POST"><button type="submit">x</button></form>
                        <div class="imgJogo"><img src="${biblioteca.Jogo.capa}" alt="" srcset="" /></div>
                        <div class="nomeJogo"><p>${biblioteca.Jogo.nome}</p></div>
                    </a>                                                       
                </div>
            `
        }
    }
 }
showJogos()