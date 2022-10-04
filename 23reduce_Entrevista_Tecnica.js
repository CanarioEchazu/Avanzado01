/**
 * Sacado desde la Cocina del codigo
 * https://www.youtube.com/watch?v=tP8JiVUiyDo&t=1082s
 * 
 * 
 * Dado un array de números, podemos conseguir un nuevo array
 *  con el doble de cada número.
 */

const numeros = [71, 41, 19, 88, 3, 65];
// const dobles = numeros.reduce(acumularDobles, [] );
// y necesitamos crear una funcion variable acumuladorDobles.

const acumularDobles = (acumulador,numero) => {
    acumulador.push(numero * 2);
    return acumulador;
};
const dobles = numeros.reduce(acumularDobles, [] );

console.log (dobles);

/**
 * Y si queremos hacer algo mas elegante, se puede hacer asi
 */

const acumuladorDoblesOtroModo = (acumulador, numero) => [...acumulador, numero * 2];
const doblesOtraManera = numeros.reduce(acumuladorDoblesOtroModo, []);

console.log (doblesOtraManera)