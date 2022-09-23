var frutas = ['Manzana','Banana','Frutilla','Cereza'];

console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[2]);

var masFrutas = frutas.push('Uvas');  //Agrega item al ultimo
console.log(frutas)

var ultimo = frutas.pop('Uvas');   // quita item del ultimo
console.log (frutas);


var nuevaLongitud = frutas.unshift('Uvas'); // agrega item adelante
console.log(frutas);


var borrarFrutas = frutas.shift('Uvas');   // quita item primero
console.log (frutas);

var borrarFrutas = frutas.shift();  // quita otro nuevo item primero
console.log(frutas);

var posicion = frutas.indexOf('Frutilla');
console.log (posicion);