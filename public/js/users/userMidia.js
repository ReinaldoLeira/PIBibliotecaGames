const aba1= document.querySelector('.titulo1')
const aba2 = document.querySelector('.titulo2')
const conteudo = document.querySelector('.conteudo1')
conteudo.innerHTML = '';


async function carregarConteudo(){
    const resultado = await fetch("http://localhost:3000/apis/userimg")
    const body = await resultado.json()
    
    for (const img of body) {
        
        conteudo.innerHTML += `
        <div class="caixaImagem">
            <a href="${img.path}">
                <div class="caixaImagem-img"><img src="${img.path}" alt=""></div>
            </a>
                <form action="/users/midias/deletar/${img.id}" method="POST">
                    <div class="caixaImagem-titulo">
                        <button type="submit" class="sendMidia">Deletar</button>
                    </div>
                </form>
        </div>`
    }
}

carregarConteudo()


aba2.onclick = () =>{
    
    aba2.style.cursor = 'default';
    aba2.style.background = 'white';
    aba1.style.cursor  = 'pointer';    
    aba1.style.background = '#10838d'

    async function AcharVideo(){
        const resultado = await fetch("http://localhost:3000/apis/uservideo")
        const body = await resultado.json()
        conteudo.innerHTML =''

        for (const video of body) {
            conteudo.innerHTML += `
            <div class="caixaImagem">
                    <a href="${video.path}">
                        <div class="caixaImagem-img"><img src="https://image.flaticon.com/icons/png/512/74/74617.png" alt=""></div>
                    </a>
                <form action="/users/midias/deletar/${video.id}" method="POST">
                    <div class="caixaImagem-titulo">
                        <button type="submit" class="sendMidia"> Deletar </button>
                    </div>
                </form>
            </div>`
        }
    }

    
    AcharVideo()

}

aba1.onclick = () => {
    
    aba1.style.cursor = 'default';
    aba1.style.background = 'white'
    aba2.style.background = '#10838d'
    aba2.style.cursor = 'pointer'

    
    

    async function acharImg(){
        const resultado = await fetch("http://localhost:3000/apis/userimg")
        const body = await resultado.json()
        conteudo.innerHTML =''
        for (const img of body) {
            conteudo.innerHTML += `
            
                <div class="caixaImagem">
                    <a href="${img.path}">
                        <div class="caixaImagem-img"><img src="${img.path}" alt=""></div>
                    </a>
                <form action="/users/midias/deletar/${img.id}" method="POST">
                    <div class="caixaImagem-titulo">
                        <button type="submit" class="sendMidia" >Deletar</button>
                    </div>
            </form>
            </div>`
        }
    }

    acharImg()
    
    
}

const buttomAdd = document.querySelector('.buttonAdd img')
const modalSend = document.querySelector('.containerPai')
const closeButtom = document.querySelector('.closeButtom')

buttomAdd.onclick = () => {
    modalSend.style.display = 'block';
}
closeButtom.onclick = () => {
    modalSend.style.display = 'none';
}
const videoButtomOne = document.querySelector('.t-one')
const videoButtomTwo = document.querySelector('.t-two')
const videoModal = document.querySelector('.videoModal')

videoButtomTwo.onclick = () => {

    videoModal.style.display = 'block';
    videoButtomTwo.style.backgroundColor = 'white';
    videoButtomTwo.style.cursor = 'default';
    videoButtomOne.style.backgroundColor ='rgb(150, 150, 150)' ;
    videoButtomOne.style.cursor = 'pointer';       
}
videoButtomOne.onclick = () => {

    videoModal.style.display = 'none';
    videoButtomOne.style.backgroundColor ='white' ;
    videoButtomOne.style.cursor = 'default';
    videoButtomTwo.style.backgroundColor = 'rgb(150, 150, 150)';
    videoButtomTwo.style.cursor = 'pointer';

}

const selectJogo = document.querySelector('.selectJogo')
const selectJogo2 = document.querySelector('.selectJogo2')

async function acharJogo() {
    const resultado = await fetch("http://localhost:3000/apis/jogos")
    const body = await resultado.json()
    console.log(body)
    
    for (const jogo of body) {
        selectJogo.innerHTML += `<option value='${jogo.id}'>${jogo.nome} </option>`
        selectJogo2.innerHTML += `<option value='${jogo.id}'>${jogo.nome} </option>`
    }
}
acharJogo()

