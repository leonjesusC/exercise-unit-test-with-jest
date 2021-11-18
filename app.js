// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen (usd) {
    let EURtoUSD = 1 / oneEuroIs.USD
    let equivYEN = EURtoUSD * oneEuroIs.JPY

    return Math.floor(equivYEN * usd)
}


function fromEuroToDollar (eur) {

    return Math.floor(eur * oneEuroIs.USD)

}


function fromYenToPound (yen) {
    let EURtoYEN = 1 / oneEuroIs.JPY
    let equivGBP = EURtoYEN * oneEuroIs.GBP

    return Math.floor(equivGBP * yen)
}


console.log(fromDollarToYen(15))
console.log(fromEuroToDollar(15))
console.log(fromYenToPound(1500))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };