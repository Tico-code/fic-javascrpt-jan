// obtem os elementos do DOM
const valor1 =  document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

// Variável
const resultado = document.getElementById("resultado");

// Função para fazer a soma

function somar(event) {
    event.preventDefault();
    
    let resultadoSoma = Number (valor1.value) + Number (valor2.value);

    resultado.innerHTML = resultadoSoma;

}

// função para sub

function minus(event) {
    event.preventDefault();

    let resultadoSoma = valor1.value - valor2.value;
    resultado.innerHTML = resultadoSoma;
}

function mult (event) {
    event.preventDefault();

    let resultadoSoma = valor1.value * valor2.value;
    resultado.innerHTML = resultadoSoma;
}

function divide (event) {
    event.preventDefault();

    let resultadoSoma = valor1.value / valor2.value;
    resultado.innerHTML = resultadoSoma;

}
