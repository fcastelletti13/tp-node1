const countryToCurrency = require( 'country-to-currency' )
function monedaPais(pais){
    let moneda;
    try {
        moneda = countryToCurrency[pais];
    } catch (error) {
        console.error(error)
    }
    return moneda;
}

module.exports = {
    monedaPais
}