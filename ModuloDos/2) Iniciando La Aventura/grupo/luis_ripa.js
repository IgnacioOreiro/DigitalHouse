const DatosPersonales = 
    {
        nombre: "Jose Luis Ripa",
        hobbie: "Corriendo",
        zona: "La Plata, BA",
        saludar(){
            return `Hola! Soy ${this.nombre} disfruto  ${this.hobbie} y vivo en ${this.zona}`;
        }
    }
;

module.exports = DatosPersonales.saludar();
