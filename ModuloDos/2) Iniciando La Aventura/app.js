const datosAlumnos = require('./grupo/ignacio_oreiro');
const datosAlumnosDos = require('./grupo/andres_estevez');
const datosAlumnosTres = require('./grupo/pablo_chandi');
const datosAlumnosCuatro = require('./grupo/luis_ripa');

console.log(datosAlumnos);
console.log(datosAlumnosDos);
console.log(datosAlumnosTres);
console.log(datosAlumnosCuatro);

//----------------------------------------//

const fs = require('fs');
const datos = fs.readFileSync(__dirname + '/texto.txt', 'utf-8');

console.log(datos);

