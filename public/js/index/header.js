const nomeUsuarioLogado = document.querySelector('.nome-usuario-logado')
const caixaListaLogin = document.querySelector('.caixaListaLogin')

nomeUsuarioLogado.onclick = () =>{
    caixaListaLogin.classList.toggle('aparecer')
    
}