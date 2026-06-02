
const sum = (a, b) => {
    return a + b;
}


let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};


const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}


const fromDollarToYen = function(amountInDollar) {
    let amountInEuro = amountInDollar / oneEuroIs["USD"];
    return amountInEuro * oneEuroIs["JPY"];
}

const fromYenToPound = function(amountInYen) {
    let amountInEuro = amountInYen / oneEuroIs["JPY"];
    return amountInEuro * oneEuroIs["GBP"];
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };