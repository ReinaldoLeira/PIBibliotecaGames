

const aba1= document.querySelector('.titulo1')
const aba2 = document.querySelector('.titulo2')
const conteudoImagem = document.querySelector('.conteudoImagem')
const conteudoVideo = document.querySelector('.conteudoVideo')



aba2.onclick = () =>{
    conteudoImagem.style.display = 'none'
    conteudoVideo.style.display= 'flex'
    aba2.style.cursor = 'default';
    aba2.style.background = 'white';
    aba1.style.cursor  = 'pointer';    
    aba1.style.background = '#10838d'

}

aba1.onclick = () => {
    
    conteudoVideo.style.display = 'none'
    conteudoImagem.style.display = 'flex'
    aba1.style.cursor = 'default';
    aba1.style.background = 'white'
    aba2.style.background = '#10838d'
    aba2.style.cursor = 'pointer'

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