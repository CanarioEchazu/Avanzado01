let articulos = [
    { nombre: 'Bici', costo: 3000},
    { nombre: 'TV', costo: 2500},
    { nombre: 'Libro', costo: 320},
    { nombre: 'Celular', costo: 1000},
    { nombre: 'Laptop', costo: 2000},
    { nombre: 'Teclado', costo: 500},
    { nombre: 'Audifonos', costo: 1700},
];

let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

console.log(encuentraArticulo)

/** Ahora voy a crear otro m'etodo For Each */

articulos.forEach(function (articulo){
    console.log(articulo.nombre);
});

/** y tambien tengo el metodo Some 
 * Sirve para ver si algun elemento cumple con la condicion
 * con true o false
*/

let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})

console.log(articulosBaratos)
