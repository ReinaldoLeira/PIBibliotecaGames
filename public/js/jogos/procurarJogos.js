const paginacao = document.querySelector('#paginacaoProcurarJogos')
    const exibirJogos = document.querySelector('#exibirJogos')
    let cont = 1
    let limite = 0
   
    paginacao.onclick = (e) => {
        e.preventDefault()        
        let valorPagina = e.target.innerText
        if(valorPagina !== 'L' && valorPagina !== 'R' && parseInt(valorPagina) !== cont){
            
            if(valorPagina > cont){
                if(parseInt(valorPagina) <= limite){
                    cont = parseInt(valorPagina)
                    selecionarPaginasMaior()                
                    mudarAtivo()
                    carregarJogos()
                }
                return
            }
            cont = parseInt(valorPagina)
            selecionarPaginasMenor()
            mudarAtivo()
            carregarJogos()
        }      
    }
    document.querySelector('#pl').onclick = (e) => {               
        descerPaginas()
        mudarAtivo()
        carregarJogos()
    }   

    document.querySelector('#pr').onclick = (e) => {        
        subirPaginas()
        mudarAtivo()
        carregarJogos()
    }   

    window.onload = carregarJogos()

    async function carregarJogos(){
        const url = new URL(window.location.href)       
        const resultado = await fetch(`http://localhost:3000/apis/listarjogos${url.search}`)
        const jogos = await resultado.json()
        await console.log(Math.ceil(jogos.length / 15))        
        limite = Math.ceil(jogos.length / 15)
        exibirJogos.innerHTML = ""
        for(let i= 15 * (cont - 1); i<jogos.length && i < (cont * 15); i++){
            //console.log(i)
            exibirJogos.innerHTML +=  `<a href="/jogos/perfil/${jogos[i].id}"><img src="${jogos[i].capa}"/><p>${jogos[i].nome}</p></a>`                
        }
        document.querySelector('#jogosEncontrados').innerText = ` Jogos Encontrados: ${jogos.length}`
    }

    function mudarAtivo(){
        document.querySelector('.ativo').classList.remove('ativo')
        document.querySelector(`#p${cont}`).classList.add('ativo')
    }
    function selecionarPaginasMaior(){

        if(cont > 2){
            document.querySelector(`#p${cont}`).innerText =   cont  + 1 
            document.querySelector(`#p${cont}`).id = `p${cont + 1}`; 

            document.querySelector(`#p${cont - 1}`).innerText =   cont
            document.querySelector(`#p${cont - 1}`).id = `p${cont}`;
            
            document.querySelector(`#p${cont - 2}`).innerText =   cont - 1
            document.querySelector(`#p${cont - 2}`).id = `p${cont - 1}`;
    }
    }
    function selecionarPaginasMenor(){ 
        if(cont >= 2){
            document.querySelector(`#p${cont}`).innerText =   cont - 1
            document.querySelector(`#p${cont}`).id = `p${cont - 1}`;

            document.querySelector(`#p${cont + 1}`).innerText =   cont
            document.querySelector(`#p${cont + 1}`).id = `p${cont}`;
            
            document.querySelector(`#p${cont + 2}`).innerText =   cont + 1
            document.querySelector(`#p${cont + 2}`).id = `p${cont + 1}`;  
        }
    }
    function subirPaginas(){         
        if(cont < limite){
            cont ++
            if(cont >= 3){
            document.querySelector(`#p${cont}`).innerText =   cont + 1
            document.querySelector(`#p${cont}`).id = `p${cont + 1}`;

            document.querySelector(`#p${cont - 1}`).innerText =   cont
            document.querySelector(`#p${cont - 1}`).id = `p${cont}`;

            document.querySelector(`#p${cont - 2}`).innerText =   cont  - 1 
            document.querySelector(`#p${cont - 2}`).id = `p${cont - 1}`;            
        }
    }
        
    }
    function descerPaginas(){
        cont == 1 ?  "" : cont --
        if(cont > 1){
            document.querySelector(`#p${cont}`).innerText =   cont - 1   
            document.querySelector(`#p${cont}`).id = `p${cont - 1}`;      

            document.querySelector(`#p${cont + 1}`).innerText =   cont
            document.querySelector(`#p${cont + 1}`).id = `p${cont}`;

            document.querySelector(`#p${cont+2}`).innerText =   cont + 1
            document.querySelector(`#p${cont+2}`).id = `p${cont + 1}`;
        }
    }