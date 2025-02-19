const nome = document.getElementById("nome");
const cidade = document.getElementById("cidade");
const email = document.getElementById("email");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo")
const txtemail = document.getElementById("txt-email");



function mudar(event) {
    event.preventDefault();


    if (nome.value === "" || cidade.value === "" || email.value === "") {
        alert("Preencha os campos");
        
    }
    

    
    console.log("Olá");
    console.log(nome.value)

    // imprimir na tela
    titulo.innerHTML = nome.value;

    subtitulo.innerHTML = cidade.value;

    txtemail.innerHTML = email.value;
    txtemail.innerHTML = email.value;
    // limpar os cantos
    nome.value = "";
    cidade.value = "";
    email.value = "";


}

function mudarCor () {
    document.body.style.backgroundColor === "lightblue";

          if (document.body.style.backgroundColor === "lightblue") {
            document.body.style.backgroundColor = "";
          } else {
            document.body.style.backgroundColor = "lightblue";
          }
            
}





