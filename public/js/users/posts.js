const addPost = document.querySelector('#addPost')
const modalPost = document.querySelector('.modalPost')

addPost.onclick = () => {
    
    modalPost.style.display = 'block'; 
}

const closeButton = document.querySelector('.closeButton')

closeButton.onclick = () => {
    modalPost.style.display = 'none'; 
}

const includPost = document.querySelector('.containerMain')
async function acharpost() {
    const resultado = await fetch("http://localhost:3000/apis/posts")
    const body = await resultado.json()
    console.log(await body)

    for (const post of body ) {

        includPost.innerHTML +=
            `<div class="caixaPosts">
                <div class="postTitulo"> 
                    <p>${post.titulo}</p>
                </div>
                
                <div class="areaPost">
                    <span > ${post.descricao}
                    </span>
                    
                </div>
            <form action="/users/posts/deletar/${post.id}" method="POST">
                    <button type="submit" class="deletButtom" >x</button>
                </form>
            </div>`                
    }
}
acharpost();


async function enviarPost(url, body) {
    
    let result = await fetch(url,{
        method:'POST',
        body : JSON.stringify(body),
        headers: {'Content-type': 'application/json'}  
    })
    let postBody = await result.json()
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
                    <span class="error">${postBody.message} !!!!!</span>
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
      return window.location.href = 'http://localhost:3000/users/posts'
    }
}

const inputPost = document.querySelector('.inputPost')

inputPost.onclick = (e) =>{
    
    try{ 
    
    let url = 'http://localhost:3000/users/posts'   
    let tituloPost= document.getElementById('tituloPost').value
    let userPost = document.getElementById('userPost').value

    body = { 
        'tituloPost' : tituloPost,
        'userPost': userPost,
    }
    
    enviarPost(url, body)

    }catch{
      
    }

}    