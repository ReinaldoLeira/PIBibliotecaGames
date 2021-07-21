const meusJogos = document.getElementById('meusJogos')
const tituloJogos = document.getElementById('tituloJogos')
const tituloDesejo = document.getElementById('tituloDesejos')
const meusDesejos = document.getElementById('meusDesejos')

tituloDesejo.onclick = () => {
    meusJogos.style.display = 'none'
    meusDesejos.style.display = 'flex'

}

tituloJogos.onclick = () => {
    meusJogos.style.display = 'flex'
    meusDesejos.style.display = 'none'

}
