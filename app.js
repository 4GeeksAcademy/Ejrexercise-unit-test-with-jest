
let oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07,  // Dólar estadounidense
    "GBP": 0.87   // Libra esterlina
};

//  Euros a Dólares
function fromEuroToDollar(amountInEuro) {
    return amountInEuro * oneEuroIs["USD"];
}

// Dólares a Yenes
function fromDollarToYen(amountInDollar) {
    let amountInEuro = amountInDollar / oneEuroIs["USD"];
    return amountInEuro * oneEuroIs["JPY"];
}

//  Yenes a Libras
function fromYenToPound(amountInYen) {
    let amountInEuro = amountInYen / oneEuroIs["JPY"];
    return amountInEuro * oneEuroIs["GBP"];
}


module.exports = { 
    fromEuroToDollar, 
    fromDollarToYen, 
    fromYenToPound 
};