
const DatosPersonales = 
    {
        nombre: "Andres Estevez",
        hobbie: "Discos de vinilo",
        zona: "Caballito, CABA",
        saludar(){
            return `Hola! Soy ${this.nombre} disfruto escuchar ${this.hobbie} y vivo en ${this.zona}`;
        }
    }
;

module.exports = DatosPersonales.saludar();