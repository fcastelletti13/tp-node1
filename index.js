const concatenar = require("./src/modules/ej01");
const matematica = require("./src/modules/ej02");
const Alumno = require("./src/models/ej03");
const file = require("./src/modules/ej04");
const url = require("./src/modules/ej05-06");
const moneda = require("./src/modules/ej07");
concatenar.concatenarString("hola,"," como estas?")
console.log(matematica.sumar(10,10))
console.log(matematica.restar(10,10))
console.log(matematica.multiplicar(10,10))
console.log(matematica.dividir(10,10))
console.log(matematica.PI)
Alumno.Username = "Axel"
Alumno.DNI="46958386"
console.log(Alumno.Username,Alumno.DNI)
 file.crearArchivo()
 url.leerUrl("https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/1921566/tp-1-node")
 const pais = "US"
 const Moneda=moneda.monedaPais(pais)
 console.log(Moneda)
