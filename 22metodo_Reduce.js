/** Sacado desde
 * 19. MAP, FILTER y REDUCE EN JAVASCRIPT
 * La Cocina del Código
 * https://www.youtube.com/watch?v=tP8JiVUiyDo&t=1082s
 */

let numeros = [3, 10,20,50];

// se podria hacer asi, pero es laaaaaargo. 
let total = 0;
for (let numero of numeros){
 //   console.log('total: ', total,'y numero: ', numero)
    total += numero;
 //   console.log('Ahora numero: ',numero,'y total : ',total)
}
 console.log('TOTAL ES:', total);

/**  Entonces aplico reduce, para que sea mas simple
*
* let total2 = numeros.reduce((acumulador, numero, posicion, numeros )=>{
*  }, 0); 
*
* iniciando el acumulado con su parametro 0
* y despues va ir incrimentendando de acuerdo a cada elemento.
*/

/** 
let total2 = numeros.reduce((acumulador, numero ) => {
    return acumulador + numero
}, 0);

* Pero se puede hacer mas simple en una sola linea
*/


let total2 = numeros.reduce((acumulador, numero)=> acumulador + numero, 0 );

console.log(total2)

/**
 * y algo mejor aun, una tercera manera
 * para que sea mas legible
 */

let acumular = (acumulador,numero) => acumulador + numero;
// let total3 = numeros.reduce( acumular, 0 );
// pero si el array no tuviera elementos, entonces hay que hacer
// una simple llamada para evitar el error en caso de array vacio.
let total3 = numeros.length >0 ?  numeros.reduce( acumular ) : 0 ;

 console.log(total3)