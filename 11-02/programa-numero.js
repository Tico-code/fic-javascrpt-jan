/*
    - Verifica se o número é positivo, negativo ou 0
    Se o Número for maior que 0 é positivo
    se o número for menor que zero, é megativo
    senão o número não é valido
*/

let numero = prompt("digite um número");

if (numero < 0) {
   document.write(` ${numero} é Negativo e está inválido`)
} else if(numero > 0) {
    document.write(` ${numero} é positivo e está válido`)
} else  {
    document.write(` ${numero} é 0 e está inválido`)
}