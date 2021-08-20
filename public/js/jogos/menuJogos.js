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

const perfilModal = document.getElementById('perfilModal')

async function selecionarPlataforma(value, obtido) {

    const resultado = await fetch("http://localhost:3000/apis/jogos")
    const jogos = await resultado.json()
    
    perfilModal.style.display='flex'
    
    for (const jogo of jogos){
        
        if(jogo.id == value){
            perfilModal.innerHTML = 
            `
            <div class="caixaSelectPlataforma">
                <h1>Selecione a plataforma</h1>

                <select name="plataforma" id="plataforma">
                    
                </select>
                <div>
                    <input type="radio" name="jogo" id="jogo" value="${jogo.id}"checked disabled>
                    <label for="jogo">${jogo.nome}</label>
                </div>
                <button value="${obtido}" id="btnEnviar" onclick="Enviar('${obtido}')"><img src="/img/estrelaPintada.png" class="btnEnviar-img"/></button>
                <img src="/img/back.png" id="bck"/>
            </div>
            `
            for (const plataformas of jogo.plataforma){
                const opPlataforma = document.getElementById('plataforma');

                opPlataforma.innerHTML +=
                `
                <option value="${plataformas.nome}">${plataformas.nome}</option>
                `            

            }
        }
    }

    const bck = document.getElementById('bck')
    bck.onclick = () =>{
        perfilModal.style.display='none'
        perfilModal.innerHTML =''
    }

}

function Enviar(valor){
    try{

        let jogo = document.getElementById('jogo').value
        let plataforma = document.querySelector('#plataforma').value    
        let body = { 
            'plataforma' : plataforma,
            'jogo' : jogo,
            'escolha' : valor,
        }
        console.log(body)

        fezerFetch('http://localhost:3000/users/meusjogos' , body)
        }catch{
            
        }

}
async function fezerFetch(url, body) {
    
    let result = await fetch(url,{
        method:'POST',
        body : JSON.stringify(body),
        headers: {'Content-type': 'application/json'}  
    })
    let loginBOdy = await result.json()
    const divError = document.getElementById('modalError')
    console.log(result)

    if (result.status == 400) {
        divError.style.display='flex'
        divError.innerHTML = `
        <div class="modalError">
            <div class="caixaError">
            <div class="cxImg">
                    <img src="/img/error.png" alt="" class="imgError">
            </div>
            <div class="messageError">
                    <span class="error">${loginBOdy.message} !!!!!</span>
            </div>
            <div class="buttonVoltar"><button id="buttonVoltar">Ok</button></div>
        </div>
        <link rel="stylesheet" href="/css/error.css">
        </div>
        `
        const buttonVoltar = document.querySelector('#buttonVoltar')
        buttonVoltar.onclick = () => {
            document.querySelector('.modalError').style.display = 'none'
            document.querySelector('.modalError').innerHTML =''

    }        
    }

    if (result.status == 200){
      return window.location.href = 'http://localhost:3000/users/meusjogos'
    }
    }