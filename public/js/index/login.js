

async function fazerLogin(url, body) {
    
    let result = await fetch(url,{
        method:'POST',
        body : JSON.stringify(body),
        headers: {'Content-type': 'application/json'}  
    })
    let loginBOdy = await result.json()
    const divError = document.getElementById('error')

    if (result.status == 400) {

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

    }        
    }

    if (result.status == 200){
      return window.location.href = 'http://localhost:3000/users'
    }
    }

const inputSubimit = document.querySelector('.inputSubmit')

inputSubimit.onclick = (e) =>{
    
    try{

    let url =  'http://localhost:3000/login'
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    
    if(!email){
        throw new Error ('caixa Email vazia')
    }
    if(!senha){
        throw new Error ('caixa senha vazia')
    }

    let body = { 
        'email' : email,
        'senha' : senha
    }

    fazerLogin(url , body)
    }catch{
        
    }

}    