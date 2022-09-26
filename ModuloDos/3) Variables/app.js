//------(Variables)--------//

let tiposDeCases = {
    camelCase: " camelCase ",
    PascalCase: " PascalCase ",
    snake_case: " snake_case ",
    'kebab-case': " kebab - case "
}


//------(VAR)------//
// Las declaraciones var tienen un ámbito global o un ámbito de función/local. El ámbito es global cuando una variable var se declara fuera de una función. Esto significa que cualquier variable que se declare con var fuera de una función está disponible para su uso en toda la pantalla


var nombre = "Ignacio";

console.log(nombre)


//------(LET)------//
// let tiene un ámbito de bloque. Un bloque es un trozo de código delimitado por {}. Un bloque vive entre llaves. Todo lo que está dentro de llaves es un bloque. Así que una variable declarada en un bloque con let  solo está disponible para su uso dentro de ese bloque.


let apellido = "Ignacio";

console.log(apellido)


//------(CONST)------//
//Las variables declaradas con const mantienen valores constantes. Las declaraciones const similitudes con las declaraciones let. Las declaraciones const tienen un ámbito de bloque Al igual que las declaraciones let, solamente se puede acceder a las declaraciones const dentro del bloque en el que fueron declaradas. const no puede modificarse ni volver a declararse. Esto significa que el valor de una variable declarada con const s el mismo dentro de su ámbito. No se puede actualizar ni volver a declarar. Así que si declaramos una variable con const, no podemos hacer esto


const nombreCompleto = "Ignacio Oreiro"

console.log(nombreCompleto)




// Declarando variables

var edad = '20';
var peso = '100';



// Asignando valores a las variables

var edad = 20;
var peso = 100;

// La diferencia entre var y let


let nombre;
let apellido;
let edad;
let telefono;
let sabeProgramar;


// Las constantes

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;





