

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
