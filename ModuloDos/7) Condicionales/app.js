
// Un condicional te permite ejecutar un bloque de codigo siempre que se cumpla una condicion

let clima = "Soleado";
let dia = "Domingo";

if(clima == "Soleado" && dia == "Domingo"){
    console.log("Lindo dia para pasear");
}else if(clima == "Nublado" && dia == "Domingo"){
    console.log("Lindo dia para dormir");
}else{
    console.log("Que ganas de comer ravioles");
}

//  Un if no siempre necesita de un else o un else if

// Un if puede tener muchos else if si lo requiere

// El else es unico y siempre se usa al final no importa que sea un if o un else if