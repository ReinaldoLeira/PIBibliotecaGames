
async function fazerRegistro(url, body) {
    
    let result = await fetch(url,{
        method:'POST',
        body : JSON.stringify(body),
        headers: {'Content-type': 'application/json'}  
    })
    let rgBody = await result.json()
    const divError = document.querySelector('#error')
    console.log(result)

    if (result.status == 400) {

        divError.innerHTML = `
        <div class="modalError">

        <div class="caixaError">
        
            <div class="cxImg">
                    <img src="/img/error.png" alt="" class="imgError">
            </div>
            <div class="messageError">
                    <span class="error">${rgBody.message} !!!!!</span>
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
      return location.reload()
    }
}
c

function CadastrarUsuario() {
    
    try{ 
    let url = 'http://localhost:3000/registrar'
    let email = document.getElementById('email').value
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
    let resenha = document.getElementById('resenha').value

    body = { 
        'email' : email,
        'usuario': usuario,
        'senha' : senha,
        'resenha' : resenha
    }
    
    fazerRegistro(url, body)

    }catch{
      
    }

}    