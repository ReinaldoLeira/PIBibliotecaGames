const engrenagem = document.querySelector('.confgFoto')
const modalConfg = document.querySelector('.modalConfig')

engrenagem.onclick = () => {
    
    modalConfg.style.display = 'block'; 
}

const buttonClose = document.querySelector('.buttonClose')

buttonClose.onclick = () => {
    modalConfg.style.display = 'none'; 
}
