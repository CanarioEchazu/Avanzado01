let  articulos = [
    { nombre: 'Bici', costo: 3000},
    { nombre: 'TV', costo: 2500},
    { nombre: 'Libro', costo: 320},
    { nombre: 'Celular', costo: 1000},
    { nombre: 'Laptop', costo: 2000},
    { nombre: 'Teclado', costo: 500},
    { nombre: 'Audifonos', costo: 1700},
];

// ahora voy a poner metodos para recorrer el arrray
// Filtrar es array.filter
let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo > 500
});

console.log(articulosFiltrados); // Para ver los objetos filtrados

// Segundo metodo es map   array.map

let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
})
// para ver todas las propiedades nombre de  los objetos del array
console.log(nombreArticulos)