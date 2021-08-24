window.addEventListener('load', function() {

let abrirDiv = document.querySelector('.faqTitulo');
let classe = document.querySelector('.faqDuvidas');
abrirDiv.onclick = function(){
    classe.classList.toggle('displayBlock')
}

});