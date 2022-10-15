const abas = document.querySelectorAll(".aba");


abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }
       
        //- passo 3 - quando o usuário clicar, desmarcar a aba selecionada
        const abaSelecionado = document.querySelector(".aba.selecionado");
        abaSelecionado.classList.remove("selecionado")

        // passo 4- marcar a aba clicada como selecionado 
        aba.classList.add("selecionado")

        //- passo 5- esconder o conteúdo anterior
        //const informacaoSelecionada = document.querySelector(".informacao.selecionado")
        informacaoSelecionada.classList.remove("selecionado")

        //- passo 6 - mostrar o conteúdo da aba selecionada
        const idDoelementoDeInformacoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoelementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")

        
        
    });
});

