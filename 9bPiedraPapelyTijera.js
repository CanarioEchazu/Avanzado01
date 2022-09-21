/* * * * * PIEDRA PAPEL O TIJERA * * * * */

var probables = ["piedra", "papel", "tijera"];

// aca pc elije aleatorio
function tira() {
  tirada = Math.floor(Math.random(1777) * 3); // para tirar 0, 1 o 2
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

if (jugador1 == 0){  //Jug1 Piedra
    if (jugador2 == 1){
        console.log('Gana Jugador 2 con',probables[jugador2]);  // Jug2 Papel
    } else {
        console.log('Gana Jugador 1 con',probables[jugador1]);  // Jug2 Tijera
    }
} else if (jugador1 == 1) {  //jug 1 Papel
    if (jugador2 == 2){
        console.log('Gana Jugador 2 con',probables[jugador2]); // Jug2 Tijera
    }else{
        console.log('Gana Jugador 1 con',probables[jugador1]); // Jug2 Piedra
    }
} else if (jugador1 == 2){   // jug 1 Tijera
    if (jugador2 == 0){
        console.log('Gana Jugador 2 con',probables[jugador2]);  // Jug2 Piedra
    }else{
        console.log('Gana Jugador 1 con',probables[jugador1]);  // Jug2 Papel
    }
}
console.log ('El Jugador 1 tenia',probables[jugador1],',y el Jugador 2 tenia',probables[jugador2]);

