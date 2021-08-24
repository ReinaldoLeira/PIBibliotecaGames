window.addEventListener('load', function() {

const abrirDiv = document.querySelector('.faqTitulo');
const classe = document.querySelector('.faqDuvidas');
abrirDiv.onclick = () => {
    classe.classList.toggle('displayBlock')
}

});