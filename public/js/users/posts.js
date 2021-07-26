const addPost = document.querySelector('.addPost')
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
acharpost()