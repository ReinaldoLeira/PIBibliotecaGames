const avaliarAdd = document.querySelector('.avaliarAdd')
const containerPai = document.querySelector('.containerPai')

avaliarAdd.onclick = () => {

    containerPai.style.display = 'block';

}

const closeButtom = document.querySelector('.imgModal')
closeButtom.onclick = () => { 
    containerPai.style.display = 'none'

}