
//-----------(Metodos de strings)--------//


//.length retorna la cantidad de caracteres que hay en un string incluidos los espacios 

"Me gusta javascript".length


//.indexOf() Devuelve la primera posicion del primer resultado que encuentre si no encuentra nada devuelve -1

"Hola Mundooooo".indexOf("Mundooooo")


//.slice(punto de inicio del corte, punto de finalizacion) Al estar trabajando con un array vos le das la posicion en la que queres empezar y terminar de cortar e el array

"Me gusta JS".slice(3, 8);


//.trim() Eliminar los espacios en blanco antes y despues de la primera ocurrencia de un caracter alfanumerico

"    Soy un ser humano      "


//.split() Convierte un string a un array pasandole como parametro del metodo lo que quieras usar como separador

"Soy del planeta tierra".split(" ")
//["Soy", "del", "planeta", "Tierra"]


//.replace(loQueBusco, suRemplazo)

"Aguante python".replace("python", "JavaScript") 