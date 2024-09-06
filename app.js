function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
       section.innerHTML = "<p>Opss... Parece que nada foi encontrado! Me mande dicas de filmes e series pelo email do rodapé!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    let resultados = ""
    let titulo = ""
    let descricao = ""
    
    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
            section.innerHTML += `
            <div class="item-resultado">
                        <h2>${dado.titulo}</h2>
                        <p class="descricao-meta">${dado.descricao}
                        </p>
                        <a href=${dado.link} target="_blank">Clique aqui para saber mais.</a>
                        </div>
            `
        }


       
        
    }
}

