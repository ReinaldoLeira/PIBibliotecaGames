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


