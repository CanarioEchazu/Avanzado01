/** sacado desde 
 * Array.filter con ejemplos - Javascript
 * Programa con Leo
 * https://www.youtube.com/watch?v=moy5vdb1FPA
 */

let numeros = [-5, -7, -3, -2, -1, 0, 1, 2, 3, 4, 5, 7];

let positivos = numeros.filter(function(numero){
    return numero>=0;
});

console.log(numeros);
console.log(positivos);

let negativos = numeros.filter(function(numero){
    return numero<0;
});
console.log(negativos);

let restaurantes = [
    {nombre: 'Rancho', puntaje: 5, abierto:true},
    {nombre:'Hamburguesas', puntaje: 4, abierto:false},
    {nombre: 'Tacorriendo',puntaje:3.5,abierto:true},
    {nombre: 'Froyo',puntaje: 5, abierto: true}
];
console.log(restaurantes);

let abiertos = restaurantes.filter(function(open){
    return open.abierto == true;
})
console.log(abiertos)


let puntajeAlto = restaurantes.filter(function(restaurante){
    return restaurante.puntaje > 4; 
});
console.log (puntajeAlto);


// ahora para que sea una sola linea

let puntajeAlto2 = restaurantes.filter(r => r.puntaje >4 );
console.log(puntajeAlto2);



/** otro ejemplo mas desde 
 * https://damiandeluca.com.ar/ejemplo-de-filter-con-javascript
 */

 const nombres = ["Damian","Rafael","Maria","Elena","Ana"];
 // Crear un nuevo array con nombres de hasta 5 caracteres
 const nombres_cortos = nombres.filter(nombre => nombre.length <= 5);
 console.log(nombres_cortos);