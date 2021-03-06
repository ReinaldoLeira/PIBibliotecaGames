const aba1= document.querySelector('.titulo1')
const aba2 = document.querySelector('.titulo2')
const conteudo = document.querySelector('.conteudo1')

conteudo.innerHTML = '';




async function carregarConteudo(){
    const resultado = await fetch("http://localhost:3000/apis/userimg")
    const body = await resultado.json()
    
    for (const img of body.userImg) {
        if(img.idPerfis == body.usuario.id)
        conteudo.innerHTML += `
        <div class="caixaImagem" onclick="showModalImagem('${img.path}')">
            <div class="caixaImagem-img">
                
                <img src="${img.path}" alt="" class="caixaImagem-img-img"/> 
            </div>
            <div class="caixaImagemTitulo">
                <form action="/users/midias/deletar/${img.id}" method="POST">
                    <p class="tituloSendMidia-caixaImagem">${img.titulo}</p>
                    <button type="submit" class="sendMidia">Deletar</button>
                </form>
            </div>
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

        for (const video of body.userVideo) {
            if(video.idPerfis == body.usuario.id) {
                console.log(video.path)
            conteudo.innerHTML += 
            `           
            <div class='caixaImagem caixaVideo ' onclick="showModal('${video.path}')">
                <div class="caixaVideo-img">
                    
                    <img src="http://i3.ytimg.com/vi/${video.path}/hqdefault.jpg" alt="" class="caixaImagem-img-img"/>  
                    
                </div>
                
                <div class="caixaImagemTitulo">
                    <form action="/users/midias/deletar/${video.id}" method="POST">         
                        <p class="tituloSendMidia-caixaImagem">${video.titulo}</p>
                        <button type="submit" class="sendMidia">Deletar</button>        
                        </form>
                </div>
            </div>
            `
            }
        }
        
    }    
    AcharVideo()   
}

function showModal(value) {
    const modalVideo = document.getElementById('modalVideo')
    modalVideo.style.display='block'
    modalVideo.innerHTML =
            `
            <div id="bigVideo">
                <button id="fecharAba">FECHAR</button>
                 <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${value}" 
                 title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe>
             </div> 
            
            `
    const fecharAba = document.getElementById('fecharAba')
    fecharAba.onclick = () => {
        modalVideo.style.display ='none'
        modalVideo.innerHTML = ''

    }
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
        for (const img of body.userImg) {
            if(img.idPerfis == body.usuario.id) {
            conteudo.innerHTML +=`
            <div class="caixaImagem" id="caixaImagem">
                        <div class="caixaImagem-img"><a href="${img.path}">
                            
                            <img src="${img.path}" alt="" class="caixaImagem-img-img"/>  
                        </div>
                        <div class="caixaImagemTitulo">
                                <form action="/users/midias/deletar/${img.id}" method="POST"> 
                                    
                                        <p class="tituloSendMidia-caixaImagem">${img.titulo}</p>
                                        <button type="submit" class="sendMidia">Deletar</button>
                                    
                            </form>
                            </div>
                </div>`
        }
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


function showModalImagem(value){
    const showModal = document.getElementById('modalVideo')
    showModal.style.display='block'
    showModal.innerHTML = 
    `
        <div id="bigVideo">
            <button id="fecharAba">FECHAR</button>
            <a href="${value}" > <img src="${value}" alt="Minha Figura" class="iframe"/></a>
        
        </div>
    `
    const fecharAba = document.getElementById('fecharAba')
    fecharAba.onclick = () => {
        showModal.style.display ='none'
        showModal.innerHTML = ''

    }

}