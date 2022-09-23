var estudiantes = ['Daniela','Dario','Ignacio','Pepe'];

function saludarEstudiantes(alumno){
    console.log(`Hola, ${alumno}`);
}

for(var i = 0; i < estudiantes.length ; i = i + 1){ //con indice
    saludarEstudiantes(estudiantes[i]);
}

// for..of / llamar una variable singular, de un array del plural
for (var alumno of estudiantes){   
    saludarEstudiantes(alumno);
}