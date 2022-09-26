//Lo primero que tenemos que hacer es correr los comandos 
// npm i package-json -y
// npm i moment


//-----------------(fs)(Modulo nativo)------------//


// Creamos una variable que llama al modulo nativo de node File System

const fs = require('fs');

// Llamamos a la variable fs para verla por consola

// console.log(fs)

// El metodo .readFileSync nos permite leer archivos dandole una ubicacion como parametro y como segundo parametro el encoding UTF-8 que es para que el formato de texto sea legible en humano y no en maquina 

let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8')

// RESPUESTAS A)(Con UTF-8) B)(Sin UTF-8)

// A) Una linda prueba en Node
// B) <Buffer 55 6e 61 20 6c 69 6e 64 61 20 70 72 75 65 62 61 20 65 6e 20 4e 6f 64 65>

console.log(datos)


//-----------------(MOMENT)(Modulo externos)------------//


// Creamos una variable que llama al modulo descargado por nosotros con el comando  
// npm i moment

// Moment es una libreria la cual maneja fechas (https://momentjs.com/) este es su website

const moment = require('moment');

console.log(moment().format('MMM DD YYYY'))


//-----------------(superHeroes)(Modulo propio)--------//

const superHeroes = require('./superHeroes')

console.log(superHeroes)




// En este tema vemos el uso de 3 cosas 
// Modulos nativos
// Modulos externos 
// Modulos creados por nostros


// En definitiva todos son los mismos Pero cada uno almacena funcionalidades es imposible conocerlos todos por eso nuestro aliado es google



//-- Importar módulos

let moduloNativo = require('http')
let moduloInstalado = require('axios')
let moduloPropio = require('./miFuncion')


//-- Exportar módulos

let arrayDePeliculas  = ["Harry Potter","Her", "Up", "Lego"];


module.exports = arrayDePeliculas;