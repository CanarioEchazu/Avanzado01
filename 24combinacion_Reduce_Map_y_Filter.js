/**
 * Sacado desde la cocina del codigo
 *  23:21
 * https://www.youtube.com/watch?v=tP8JiVUiyDo&t=1082s
 */

// Para sacar los productos baratos, podria 
// 1. filtrar los elemento mas baratos
// 2. eso nos devuelve un array encadenado, al que
// podemos llamar otro array con map para un array de precios solamente.
//3. y por ultimo reducirlo cuanto suman todos sus precios
// para saber cuanto es el total.

 const productos = [
    { id: 'abc', nombre: 'Camiseta', precio: 500},
    { id: 'pla', nombre: 'Zapatillas', precio: 2000},
    { id: 'twa', nombre: 'Pantalon', precio: 1500}
];

const esBarato = producto => producto.precio < 1000;
const obtenerPrecio = productos.map(({precio})=> precio);

const precioTotalProductosBaratos = productos.filter(esBarato).map(obtenerPrecio).reduce(acumular);