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

// Uruguay alcanzó los 22 puntos 

var equipoFutbol = {
    seleccion: 'Uruguay',
    puntos: 22,
    detallePartido: function(){
        console.log(`La seleccion de ${this.seleccion} alcanzo los ${this.puntos}`);
    }
};
console.log(equipoFutbol);
console.log(equipoFutbol.seleccion);
console.log(equipoFutbol.puntos)
console.log(equipoFutbol.detallePartido())

// Palacio de las Golosinas no tiene Halls

var negocioGolosinas = {
    nombre: "El Palacio de las Golosinas",
    direccion: "Pellegrini esq San Juan",
    golosinas: 'Sin halls',
    stockHalls: function(){
        console.log (`${this.nombre} de la ${this.direccion} parece que esta ${this.golosinas}.`);
    }
}

console.log(negocioGolosinas);
console.log(negocioGolosinas.nombre);
console.log(negocioGolosinas.direccion);
console.log(negocioGolosinas.stockHalls());
