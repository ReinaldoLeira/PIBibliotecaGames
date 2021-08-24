let time = 2000, 
    currentDiv = 0,
    currentList = 0,
    divs = document.querySelectorAll('.caixaJogos'),
    lista = document.querySelectorAll('.listaJogo'),
    max = divs.length,
    max2 = lista.length;
    divs[currentDiv].classList.add("aparecer")
    lista[currentList].classList.add('amareloLista')

function nextDiv() {
      
    divs[currentDiv].classList.remove("aparecer")
    lista[currentList].classList.remove('amareloLista')

    currentDiv++
    currentList++
    if(currentDiv >= max && currentList >= max2){
        currentDiv = 0
        currentList = 0
    }
    divs[currentDiv].classList.add("aparecer")
    lista[currentList].classList.add('amareloLista')
}

function start(){
    setInterval(()=> {
        nextDiv()
    }, time)
}


window.addEventListener("load", start)