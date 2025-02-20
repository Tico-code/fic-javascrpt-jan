const listaValores = document.querySelector("#listaValores");

// Carregar valores ao iniciar a página
carregarValoresSalvos();

function carregarValoresSalvos() {
    listaValores.innerHTML = ""; // limpar a lista antes de adicionar os valores

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if (chave.startsWith("ValorSalvo")) { // filtra as chaves desejadas
            const valor = localStorage.getItem(chave);
                //criar um elemento HTML    
            const listItem = document.createElement("li");
            listItem.textContent = valor;
            listaValores.appendChild(listItem) // appendChild monta uma estrutura HTML
        }
    }
}