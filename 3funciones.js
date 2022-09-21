//Declarativas
function miFuncion () {
    return 3;
};

miFuncion();

//Expresion
/*

var otraFuncion = function(a,b){
    return a + b;
};

otraFuncion();

// var alumnos = ['Daniela','Dario','Ignacio'];

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`)
};
saludarEstudiantes("Dario");

function sumar(a,b) {
    var resultado = (a+b);
    return resultado;
}
console.log (sumar (1,2));



var persona = 'Dario';

function saludar (persona){
    console.log ('Hola ',persona);
    return;
}

saludar (persona);
saludar ('Ignacio');
saludar ('Daniela')
*/

var persona = ['Dario','Daniela','Ignacio'];

/*
i = 0;

function saludar (){
    console.log ('Hola ' + persona[i]);
    return;
}

saludar();
i = i +1;

function saludar(){
    console.log ('Hola '+ persona[i]);
    return;
}

saludar();
i = i +1;

function saludar() {
    console.log ('Hola '+ persona[i])
}  

saludar();

*/


function saludar(persona){
    for (let i = 0; i < persona.length; i++) {
        console.log ('Hola '+ persona[i])
    }
}

saludar(persona)