/* sacado desde 
https://ed.team/blog/javascript-filtrar-elementos-de-un-array-con-filter
*/
/** como primera visa, podria hacerlo asi */

let numbers = [1, 5, 23, 4, 12, 45, 78, 8, 8.9, 10, 11, 3.4, 10.1, 84, 6];

let greaterTen = [];

for (let i = 0; i < numbers.length; i++) {
  var currentNumber = numbers[i];
  if (currentNumber > 10) {
    greaterTen.push(currentNumber);
  }
}

console.log(greaterTen);

/** pero tambien, lo mejor es de este modo */

let greaterTen2 = numbers.filter((number) => number > 10);
console.log(greaterTen2);

/**
 * El método filter recibe un callback como parámetro, el cual a su vez recibe tres parámetros:

El item actual del array
El indice del item actual del array
El array actual
Internamente, este método recorre el array y para cada elemento comprueba si el callback retorna true. Finalmente, retorna un nuevo array con todos los items que pasaron la prueba.

Ten en cuenta que el callback debe retornar específicamente un valor, pues en caso contrario, se retornará un valor vacío. Para el caso anterior:
 

//ES6
let greaterTen = numbers.filter(number => { number > 10 });
console.log(greaterTen); // []

// with return
let greaterTen = numbers.filter(number => number > 10 ); // return implicito
console.log(greaterTen); // [23, 12, 45, 78, 11, 10.1, 84]

// ES5
var greaterTen = numbers.filter(function(){ 
  number > 10 
});
console.log(greaterTen); // []

// with return
var greaterTen = numbers.filter(function(){ 
  return number > 10 
});
console.log(greaterTen); 

*/

/**
 * Otro ejemplo mas de Filter()
 */

let students = [
  {
    name: "Alvaro",
    score: 10,
  },
  {
    name: "Daniel",
    score: 160,
  },
  {
    name: "Alexys",
    score: 120,
  },
  {
    name: "Rafa",
    score: 170,
  },
  {
    name: "Alejandro",
    score: 80,
  },
  {
    name: "Sofia",
    score: 90,
  },
];

let approved = students.filter((student) => student.score >= 100);

console.log(approved);
