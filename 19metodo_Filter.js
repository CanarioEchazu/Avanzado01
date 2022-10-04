/* sacado desde 
19. MAP, FILTER y REDUCE EN JAVASCRIPT
la cocina del codigo
https://www.youtube.com/watch?v=tP8JiVUiyDo&t=852s */

const productos = [
    { id: 'abc', nombre: 'Camiseta', precio: 500},
    { id: 'pla', nombre: 'Zapatillas', precio: 2000},
    { id: 'twa', nombre: 'Pantalon', precio: 1500}
];

 /* const productosBaratos = productos.filter(producto.precio <  1000);    
 este es el modo de escribir, pero abajo es mas simple */



 const esBarato = producto => producto.precio < 1000;
 console.log(esBarato);  
 //[λ: esBarato] ​​​​​at ​​​​​​​​esBarato​​​ no tengo nada claro hasta que escribo la linea de abajo
  const productosBaratos = productos.filter(esBarato);
  console.log(productosBaratos);

  // y si queremos sacar productos caros

  const esCaro = producto => !esBarato(producto);
  const productosCaros = productos.filter(esCaro);

  console.log(productosCaros);

  // tambien podemos usarlo para sacar numero repetidos.

  const numeros = [1, 2, 3, 4, 3, 1];

  const numerosUnicos = numeros.filter((numero,posicion, numeros) => { return posicion === numeros.indexOf(numero);
});

console.log (numeros);
console.log (numerosUnicos);