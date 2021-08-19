const modalUser = document.querySelector('#modalUser');

const cxEditar = document.querySelector('#cxEditar')

async function Deletar(value){
    try {
        let url = 'http://localhost:3000/gamepadm/midia/deletar';
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
        ` 
        <div id="bloquearCtz">
            <h1><h1>${loginBOdy.message}</h1></h1>
            
            <button class="cancelar2" onclick="cancelar()">Cancelar</button> 
        </div>
        `
    }
    if (result.status == 200){
        return location.reload()
      }
}

function cancelar (){
    modalUser.style.display='none'
    modalUser.innerHTML = ''
}

function CertezaDeletar(value, id){

    modalUser.style.display='flex'
    modalUser.innerHTML= 
    `
    <div id="bloquearCtz">
        <h1>Deletar a analise ${id}?</h1>
        <button class="confirmar"onclick="Deletar(${value})"> Deletar </button>
        <button class="cancelar2" onclick="cancelar()">Cancelar</button> 
    </div>
    
    `


}