function showModal(value) {
    const showModal = document.getElementById('showModal')
    showModal.style.display='block'
    showModal.innerHTML =
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
        showModal.style.display ='none'
        showModal.innerHTML = ''

    }
} 

function showModalImagem(value){
    const showModal = document.getElementById('showModal')
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