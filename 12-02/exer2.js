const cities= ['São paulo', 'Rio de Janeiro','Minas Gerais'];

upperCaseCities = [];

console.log(cities.length)

for (let i = 0; i < cities.length; i++) {
    upperCaseCities.push(cities[i].toUpperCase())
}
console.log(upperCaseCities)