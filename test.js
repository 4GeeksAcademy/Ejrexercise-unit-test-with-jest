
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// 2. Prueba original de la suma
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("one euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745); 
});


test("1.07 dollars should be 156.5 yen", function() {
    const yen = fromDollarToYen(1.07);
    expect(yen).toBe(156.5); 
});


test("156.5 yen should be 0.87 pounds", function() {
    const pounds = fromYenToPound(156.5);
    expect(pounds).toBe(0.87); 
});