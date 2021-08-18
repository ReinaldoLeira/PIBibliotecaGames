const modalUser = document.querySelector('#modalUser');

const cxEditar = document.querySelector('#cxEditar')

function cancelar (){
    modalUser.style.display='none'
    modalUser.innerHTML = ''
}
function Editar(value){

    modalUser.style.display='flex'
    modalUser.innerHTML = 
    `
    <div class="cxEditar">
        <h1>EDITAR</h1>

        <form>
            <div class="Iputs">
                <label for="email" class="label-Inputs">email do usuario:</label>
                <input type="email" name="" id="email" autocomplete="off">
            </div>
            <div class="Iputs">
                <label for="usuario">novo nome de usuario:</label>
                <input type="text" name="usuario" id="usuario" autocomplete="off">
            </div>
            <div class="Iputs">
                <label for="role">Tipo de Perfil:</label>
                <select name="role" id="role">
                    <option value=''></option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="USER">USER</option>
                </select>>
            
            </div>
            <div class="Iputs">
                <label for="img">Nova imagem do usuario:</label>
                <input type="url" name="img" id="img" autocomplete="off">
            </div>
            </form>
            <button class="enviar" onclick="Enviar(${value})" >ENVIAR</button>
            <button class="cancelar" onclick="cancelar()">Cancelar</button>            
    </div>
    `
    
}

async function Enviar(value){
    try{

        let url =  'http://localhost:3000/gamepadm/editar/usuario'
        let email = document.getElementById('email').value
        let usuario = document.getElementById('usuario').value
        let role = document.getElementById('role').value
        let img = document.getElementById('img').value
                
        let body = { 
            'id' : value,
            'email' : email,
            'usuario' : usuario,
            'role' : role,
            'img' : img
        }        
        fazerFetch(url , body)
        }catch(e){
            alert(e.message)
        }
}

function CertezaBloquear(value , nome) {
    modalUser.style.display='flex'
    modalUser.innerHTML= 
    `
    <div id="bloquearCtz">
        <h1>Bloquear o(a) ${nome} ?</h1>
        <button class="confirmar"onclick="Bloquear(${value})"> BLOQUEAR </button>
        <button class="cancelar2" onclick="cancelar()">Cancelar</button> 
    </div>
    `
}
function CertezaDeletar(value, nome){

    modalUser.style.display='flex'
    modalUser.innerHTML= 
    `
    <div id="bloquearCtz">
        <h1>Deletar o(a) ${nome} ?</h1>
        <button class="confirmar"onclick="Deletar(${value})"> Deletar </button>
        <button class="cancelar2" onclick="cancelar()">Cancelar</button> 
    </div>
    
    `


}

async function Bloquear(value){
    try {
        let url = 'http://localhost:3000/gamepadm/editar/bloquear';
        let body = {
            'id' : value
        }
        fazerFetch(url , body)       
    } catch (e) {
        alert(e.message)
    }

}
async function Desbloquear(value){
    try {
        let url = 'http://localhost:3000/gamepadm/editar/desbloquear';
        let body = {
            'id' : value
        }
        fazerFetch(url , body)       
    } catch (e) {
        alert(e.message)
    }

}
async function Deletar(value){
    try {
        let url = 'http://localhost:3000/gamepadm/editar/deletar';
        let body = {
            'id' : value
        }
        fazerFetch(url , body)       
    } catch (e) {
        alert(e.message)
    }

}



async function fazerFetch(url,body) {
    let result = await fetch(url,{
        method:'POST',
        body : JSON.stringify(body),
        headers: {'Content-type': 'application/json'}  
    })
    let loginBOdy = await result.json()
    console.log(result)
    
    if (result.status == 400) {
        modalUser.innerHTML =
        ` <div class="cxEditar">
            <h1>${loginBOdy.message}</h1>
        </div>`
    }
    if (result.status == 200){
        return location.reload()
      }
}

