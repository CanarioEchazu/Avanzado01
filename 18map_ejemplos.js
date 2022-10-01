/* COMO ES MAP */
/** Sacad desde 
 * Aprende a usar el método map de JavaScript
 * https://www.youtube.com/watch?v=2ZNIkbGKMO4
 */

const myArray = [3, 2, 1];
const newArray = myArray.map(function(current, index, array){
    console.log('Current: ', current);
    console.log('Index: ', index);
    console.log('Array: ', array);
});

const miArreglo = [3, 2, 1];
console.log ('Mi arreglo es: ',miArreglo)

const nuevoArreglo = miArreglo.map((num)=> num *2);     // con función flecha
console.log('Nuevo arreglo duplicado', nuevoArreglo)



/* * * *  * * *  * * * * * * * * * * * * * * * * * * * *
sacado desde 
Array.map con ejemplos - Javascript
Programa con Leo
https://www.youtube.com/watch?v=72CJGkNiB38
*/

/* 

   * * * * CONSEJOS * * * * 
MAP1: NO TE MODIFICA EL ARRAY ORIGINAL 
MAP2: cuando utilizas MAP siempre termina con la misma cantidad de elmentos que el array original
MAP3: MAP es una función de orden superior. (Es porque Map toma como parámetro a otra función )

*/


const projects = [
    {
        id: 11,
        name: 'French',
        create_at:'2019-01-01'
    }, {
        id: 35,
        name: 'Lion',
        create_at: '2019-01-02'
    }, {
        id: 48,
        name: 'Mobile',
        create_at: '2019-01-07'
    }, {
        id: 54,
        name: 'Improve',
        create_at: '2019-04-23'
    }
]


//const projectIds = [11, 35, 48, 54]

console.log (projects)
console.log (projects[0].id)

// otro array para trabajar
// * * *  * * *  *

const catalog =  [
    {
        id: 23,
        name: 'Red notebook',
        price: 2.25
    }, {
        id: 24,
        name: 'Black pens',
        price: 1.00
    }, {
        id: 25,
        name: 'Blue pens',
        price: 1.50
    }, {
        id: 26,
        name: 'Calculator',
        price: 12.50
    }
]

// * * * * * *  * * * * * * * * * * * * * * 

// EJEMPLO 1 DE MAP

// * * * * * * * * * * * * *  * * * * * * * * 

const numbers = [1, 2, 3, 4]
             // [2, 4, 6, 8]   duplicar los numeros

const newNumbers = numbers.map(function(n){
    return n * 2;
})
console.log(numbers)
console.log (newNumbers);

//  * * * * * * * * * * * * * * * * * * * * *

// EJEMPLO 2 de MAP 

//  * * * * * * * * * * * * * * * * * * * * *

const projectIds = projects.map (function(p){
    return p.id;
})

console.log(projectIds);

//  * * * * * * * * * * * * * * * * * * * * *

// EJEMPLO 3 de MAP 

//  * * * * * * * * * * * * * * * * * * * * *

const catalogWithTax = catalog.map(function(c){
    return {
        id: c.id,
        name: c.name,
        price: c.price,
        tax: c.price * .10  // aqui se agrega al nuevo array catalogWithTax la propiedad de tax.
    }
})

console.log(catalog);
console.log(catalogWithTax);


/* CONCLUSION 
  (); map.js
*/

const prods = [
    {id: "assdf",nombre:"asdsd",precio:454},
    {id: "tytyy",nombre:"jkjhk",precio:848},
    {id: "udgds",nombre:"ugdjd",precio:354},
];

const idProds = prods.map(({id}) => id);

console.log(idProds);


