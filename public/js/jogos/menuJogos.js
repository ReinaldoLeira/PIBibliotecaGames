window.onload = carregarAnalises()
    async function carregarAnalises(){
        const idJogo = document.querySelector("#capaMenu").alt        
        const resultado = await fetch(`http://localhost:3000/apis/listaranalises/${idJogo}`)
        const analisesNotas = await resultado.json()        
        let aux = 0;
    for(let analise of analisesNotas){
        aux+=analise.nota
    }
    aux = Math.round(aux/analisesNotas.length)    
    document.querySelector(".avaliarMenuJogo").innerHTML = `<li><h4>Avaliação Média:</h4> <div> <img src="/img/nota${aux}.png" width="70px" height="70px"> </div></li>`
    }