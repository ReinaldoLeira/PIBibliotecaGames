let time = 2000, 
    currentDiv = 0,
    divs = document.querySelectorAll('.caixaJogos'),
    max = divs.length;

function nextDiv() {
    divs[currentDiv].classList.remove("aparecer")

    currentDiv++
    if(currentDiv >= max){
        currentDiv = 0
    }
    divs[currentDiv].classList.add("aparecer")
}

function start(){
    setInterval(()=> {
        nextDiv()
    }, time)
}


window.addEventListener("load", start)