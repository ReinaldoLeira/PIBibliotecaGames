const engrenagem = document.querySelector('.confgFoto')
const modalConfg = document.querySelector('.modalConfig')

engrenagem.onclick = () => {
    
    modalConfg.style.display = 'block'; 
}

const buttonClose = document.querySelector('.buttonClose')

buttonClose.onclick = () => {
    modalConfg.style.display = 'none'; 
}


async function modalSalvarConfig(url, body) {
    
    let result = await fetch(url,{
        method:'POST',
        body : JSON.stringify(body),
        headers: {'Content-type': 'application/json'}  
    })
    let userConfig = await result.json()
    const divError = document.getElementById('error')

    if (result.status == 400) {

        divError.innerHTML = `
        <div class="modalError">

        <div class="caixaError">
        
            <div class="cxImg">
                    <img src="/img/error.png" alt="" class="imgError">
            </div>
            <div class="messageError">
                    <span class="error">${userConfig.message} !!!!!</span>
            </div>
        
            <div class="buttonVoltar"><button id="buttonVoltar">Ok</button></div> 
        </div>
    
        <link rel="stylesheet" href="/css/error.css">
        </div>
        
        `
        const buttonVoltar = document.querySelector('#buttonVoltar')
        
        buttonVoltar.onclick = () => {
            document.querySelector('.modalError').style.display = 'none'

    }        
    }

    if (result.status == 200){
      return window.location.href = 'http://localhost:3000/users'
    }
    }

const inputSubimit = document.querySelector('.inputEnviar')

inputSubimit.onclick = (e) =>{
    
    
    try{
    
    let url =  'http://localhost:3000/users'
    let urlImg = document.getElementById('formUrlImg').value
    let formusuario = document.getElementById('formUsuario').value
    let formSobreMim = document.getElementById('formSobreMim').value
    let formInsta = document.getElementById('formInsta').value
    let formTwitter = document.getElementById('formTwitter').value
    let formFace = document.getElementById('formFace').value
    
    e.preventDefault()
    let body = { 
        'urlImg' : urlImg,
        'usuario' : formusuario,
        'sobreMim': formSobreMim,
        'urlInsta': formInsta,
        'urlTwitter': formTwitter,
        'urlFace': formFace

    }
   
    modalSalvarConfig(url , body)
    }catch{
        
    }

}    