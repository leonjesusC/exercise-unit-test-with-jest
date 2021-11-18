test("fromEuroToDollar Test", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(20)

    // if 1 euro are 1.2 dollars, then 20 euros should be (20 * 1.2)
    const expected = Math.floor(20 * 1.2); 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(20)).toBe(24); //1 euro are 1.2 dolares, then 20 euros should be = (20 * 1.2)
})


test("fromDollarToYen test", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromDollarToYen(20)

    // if 1 dollar are 106.58 yen, then 20 dollars should be (20 * 106.58)
    const expected = Math.floor(20 * 106.58); 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(20)).toBe(2131); //if 1 dollar are 106.58 yen, then 20 dollars should be = (20 * 20 * 106.58)
})

test("fromYenToPound test", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromYenToPound(2000)

    // if 1 yen are 0.009382 pounds, then 2000 yen should be (2000 * 0.009382)
    const expected = Math.floor(2000 * 0.009382); 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(2000)).toBe(12); //if 1 yen are 0.009382 pounds, then 2000 yen should be (2000 * 0.009382)
})




