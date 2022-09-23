 // nombre del Objeto con palabras claves de marca, modelo, annio.
var miAuto = {  
    marca: 'Toyota',    // propiedades
    modelo: 'Corolla',
    annio: 2021,
    // agrego una propiedad que es un metodo
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

console.log (miAuto);

console.log(miAuto.marca);
console.log(miAuto.annio);
// ahora imprime la propiedad metodo
console.log(miAuto.detalleDelAuto());

