var miAuto = {  
    marca: 'Toyota',    // propiedades
    modelo: 'Corolla',
    annio: 2021,
    // agrego una propiedad que es un metodo
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};


// hacer una funcion CONSTRUCTORA

function auto (marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio
}
// esta el template para varios autos, CLASES pero es undefined
console.log(auto()); 
// para llenar datos, se utiliza la palabra "new"
var autoNuevo = new auto ('Tesla','Modelo 3',2021);

console.log(autoNuevo);

var autoNuevo2 = new auto ('Citroen','cv5','2020');
var autoNuevo3 = new auto ('Toyota','Corolla',2018);

console.log (autoNuevo2);
console.log (autoNuevo3);