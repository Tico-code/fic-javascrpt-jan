
const cars = [
    {
        brand: "Toyota",
        model: "Corola",
        year: "2022"
    },
    {
        brand: "Honda",
        model: "Civic",
        year: "2008"
    },
    {
        brand: "Fiat",
        model: "Uno",
        year: "2005"
    },
    {
        brand: "Ford",
        model: "Fiesta",
        year: "2013"
    },
    {
        brand: "Porsche",
        model: "Taycan",
        year: "2023"
    },
];
// cria uma funncao e chama essa função displayCards, aqui mesmo

function displayCard() { 
    const cardList = document.querySelector("#card-list");

    cars.forEach((car) => {
        //criamos um elemento div pelo JavaScript 
        const cardDiv = document.createElement("div");
        // criamos uma class CSS
        cardDiv.classList.add('car');

        // Criando o modelo
        const carModel = document.createElement("h2");
        carModel.textContent = `${car.brand} ${car.model}`;

        // Criando o Ano
        const carYear = document.createElement("p");
        carYear.textContent = `Ano: ${car.year}`;

        // imprimir na tela as informações
        cardList.appendChild(cardDiv);
        cardDiv.appendChild(carYear)
        cardDiv.appendChild(carModel);
    })
};

//  chamar função

displayCard();