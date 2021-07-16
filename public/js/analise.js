const avaliarAdd = document.querySelector('.avaliarAdd')
const containerPai = document.querySelector('.containerPai')

avaliarAdd.onclick = () => {

    containerPai.style.display = 'block';

}

const closeButtom = document.querySelector('.imgModal')
closeButtom.onclick = () => { 
    containerPai.style.display = 'none'

}
const selectJogo = document.querySelector('#selecJogo')

async function acharJogo() {
    const resultado = await fetch("http://localhost:3000/apis/jogos")
    const body = await resultado.json()
    console.log(body)
    
    for (const jogo of body) {
        selectJogo.innerHTML += `<option value='${jogo.id}'>${jogo.nome} </option>`
    
    }
}
acharJogo()

const selectAnalise = document.querySelector('.includAnalise')

async function modalAnalise() {

    const resultado = await fetch("http://localhost:3000/apis/analises")
    const body = await resultado.json()
    console.log(body)

    for (const analises of body) {
        
        selectAnalise.innerHTML +=
            `<div class="analise">
                <div class="imagemAnalise">
                    <img src="${analises.imgJogo}" alt="" class='imgJogo' >
                </div>
                <div class="titulo-Analise">
                    <div class="tituloA">
                        <p> ${analises.titulo}</p>
                        <div class="nota">
                            <p>Nota:${analises.nota}</p>
                        </div>
                    </div>
                    <div class="spanA">
                        <span>${analises.analise}</span>
                    </div>
                    <div class="dataPost"><p>Data: ${analises.createdAt} </p></div>
                </div>
            </div>`
    
    }
}
modalAnalise()