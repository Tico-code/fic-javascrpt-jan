// Variáveis
const campo = document.querySelector("#campo");
const salvarBtn = document.querySelector("#salvar");

// Adicionar evento de clique ao botão salvar
salvarBtn.addEventListener("click", function() {
    const valor = campo.value;
    // validação
    if (campo.value === "") {
        alert("preencha os campos")
        return false;
    }

    // salvar no local storage

    const chave = `ValorSalvo_${Date.now()}`; // usa timestamp para chave única
    console.log(chave)
    // funcionalidade do localStorage
    localStorage.setItem(chave, valor);

    // limpar campos após salvar
    campo.value = "";


    // Exbir valores salvos
    carregarValoresSalvos();
});



