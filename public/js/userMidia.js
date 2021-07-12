const aba1= document.querySelector('.titulo1')
const aba2 = document.querySelector('.titulo2')
const conteudo2 = document.querySelector('.conteudo2')

aba2.onclick = () =>{
    conteudo2.classList.add('aparecer');
    aba2.style.cursor = 'default';
    aba2.style.background = 'white';
    aba1.style.cursor  = 'pointer';    
    aba1.style.background = '#10838d'
}

aba1.onclick = () => {
    conteudo2.classList.remove('aparecer');
    aba1.style.cursor = 'default';
    aba1.style.background = 'white'
    aba2.style.background = '#10838d'
    aba2.style.cursor = 'pointer'

}