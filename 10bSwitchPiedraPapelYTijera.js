/* * * * * PIEDRA PAPEL O TIJERA * * * * */

var probables = ["piedra", "papel", "tijera"];

// aca pc elije aleatorio
function tira() {
  tirada = Math.floor(Math.random(7777) * 3); // para tirar 0, 1 o 2
  return tirada;
}

jugador1 = tira();
jugador2 = tira();
console.log(jugador1, jugador2);
console.log("El Jugador 1 saca:", probables[jugador1]);
console.log("Y el Jugador 2 saca:", probables[jugador2]);

while (jugador1 == jugador2) {
    console.log('DIERON IGUALES ASI QUE CAMBIAN');
    jugador1 = tira();
    jugador2 = tira();
    console.log(jugador1, jugador2);
    console.log("El Jugador 1 saca:", probables[jugador1]);
    console.log("Y el Jugador 2 saca:", probables[jugador2]);
}

switch (jugador1) {
    case 0:    // J1 Piedra
        jugador2 == 1 ?      //  J2 Papel?
        console.log('Gana Jugador 2 con',probables[jugador2]) :
        console.log('Gana Jugador 1 con',probables[jugador1]);
        break;
    case 1:   // J1 Papel
        jugador2 == 2 ?      //  J2 Tijera?
        console.log('Gana Jugador 2 con',probables[jugador1]):
        console.log('Gana Jugador 1 con',probables[jugador1]);
        break;
    case 2:     // J1 Tijera
        jugador2 == 0 ?      //   J2 Piedra?
        console.log('Gana Jugador 2 con',probables[jugador1]) :
        console.log('Gana Jugador 1 con',probables[jugador1]);
        break;
    default:
        console.log ('error');     // nunca va llegar ahi
        break;
}

console.log ('El Jugador 1 tenia',probables[jugador1],',y el Jugador 2 tenia',probables[jugador2]);
