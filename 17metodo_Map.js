/* sacado desde 
19. MAP, FILTER y REDUCE EN JAVASCRIPT
la cocina del codigo
https://www.youtube.com/watch?v=tP8JiVUiyDo&t=574s 
*/

const numeros = [10,20,30];
/*
//duplica normal el array numeros
for (let i = 0; i < numeros.length; i++){
    numeros[i] = numeros[i]*2
}

*/

/*const dobles = numeros.map(function(numero,posicion,numeros){
    // estos son 3 parametros que muchas veces no es necesario ponerlos
});*/


// creo un nuevo array dobles donde recibo el valor de acuerdo al map
const dobles = numeros.map(function(numero){
    return numero * 2;
})


console.log(numeros);
console.log(dobles);

console.log(dobles[0]);

// OTRO ejemplo de error que no tengo que hacerlo

const productos = [
    { id: 'abc', nombre: 'Camiseta', precio: 500},
    { id: 'pla', nombre: 'Zapatillas', precio: 200},
    { id: 'twa', nombre: 'Pantalon', precio: 1500}
];


/* Asi nunca se debe hacer
const productosConDescuento = productos.map(function(producto){
    if (producto.precio < 1000)return producto;

    producto.precio = producto.precio * 0.9; ERROR !!!
});    */

const productosConDescuento = productos.map(function(producto){
    if (producto.precio < 1000)return producto;

    return {
        ...producto,
        precio: producto.precio * 0.9
    };
});

console.log(productos);
console.log(productosConDescuento);

/* * * * *  * RESULTADOS * * * * * * 
[ { id: 'abc', nombre: 'Camiseta', precio: 500 },
  { id: 'pla', nombre: 'Zapatillas', precio: 200 },
  { id: 'twa', nombre: 'Pantalon', precio: 1500 } ]
  ​​​​​at ​​​​​​​​productos​​​ ​17metodosMapFilterReduce.js:53:1​

[ { id: 'abc', nombre: 'Camiseta', precio: 500 },
  { id: 'pla', nombre: 'Zapatillas', precio: 200 },
  { id: 'twa', nombre: 'Pantalon', precio: 1350 } ]
  ​​​​​at ​​​​​​​​productosConDescuento​​​ ​17metodosMapFilterReduce.js:54:1

  Son dos arrays, en el primero no se modifica y 
  el segundo solo tiene descuento el que cumple con el IF < 1000
*/


/* * * * * * * * * * * * * * * * * * * * * 
y ahora más simplificado para sacar id del array
* * * * * * * * * * * * * * * * * * * * */

const productosB = [
    { id: 'abc', nombre: 'Camiseta', precio: 500},
    { id: 'pla', nombre: 'Zapatillas', precio: 200},
    { id: 'twa', nombre: 'Pantalon', precio: 1500}
];

/*   
const idProductosB = productosB.map(function(productoB){
    return productoB.id;
});     
        Es correcto lo escrito arriba, pero abajo es mas simple.
*/ 

const idProductosB = productosB.map(({id})=> id);

console.log (idProductosB);