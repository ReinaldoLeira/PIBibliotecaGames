window.addEventListener('load', function() {

const abrirDiv = document.querySelector('.faqTitulo');
const classe = document.querySelector('.faqDuvidas');
abrirDiv.onclick = () => {
    classe.classList.toggle('displayBlock')
}

const abrirDiv2 = document.querySelector('.faqTitulo2');
const classe2 = document.querySelector('.faqDuvidas2');
abrirDiv2.onclick = () => {
    classe2.classList.toggle('displayBlock2')
}


});
