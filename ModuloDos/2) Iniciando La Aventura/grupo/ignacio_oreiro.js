const DatosPersonales = 
    {
        nombre: "Ignacio Oreiro",
        hobbie: "Tecnologias",
        zona: "Villa Crespo, CABA",
        saludar(){
            return `Hola! Soy ${this.nombre} disfruto conociendo nuevas  ${this.hobbie} y vivo en ${this.zona}`;
        }
    }
;

module.exports = DatosPersonales.saludar();
