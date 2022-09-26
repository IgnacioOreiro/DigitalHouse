
const DatosPersonales = 
    {
        nombre: "Pablo Chandi",
        hobbie: "Video Juegos",
        zona: "Almagro, CABA",
        saludar(){
            return `Hola! Soy ${this.nombre} disfruto jugando ${this.hobbie} y vivo en ${this.zona}`;
        }
    }
;

module.exports = DatosPersonales.saludar();