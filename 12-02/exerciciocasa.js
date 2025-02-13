const arrays = [ 
[4, 32, 8]
[64, 8, 32]
[8.32,16]
[2,8,4]];

let soma = 0;

for (let i = 0; i < arrays.length; i++) {
    const arrayAtual= arrays[i];

for (let j = 0; j < arrayAtual.length; j++) {
    soma += arrayAtual[j];
 }
}
console.log(soma);