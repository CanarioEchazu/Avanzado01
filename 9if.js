if (false){
    console.log("Hola");
} else if(false) {
    console.log("es falso");
} else {
    console.log("siii");
}

var edad = 17;

if(edad === 18){
    console.log('Puedes votar, sera tu 1ra vez');
} else if ( edad > 60) {
    console.log("Puedes votar pero no es obligatorio para vos");
} else if ( edad > 18){
    console.log("Puedes votar nuevamente");
} else {
    console.log("Aun no puedes votar");
}

edad > 18 ?  console.log('Puedes votar nuevamente') : console.log("Aun no puedes votar");


