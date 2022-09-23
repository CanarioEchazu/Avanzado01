var estudiantes = ['Maria','Sergio','Rosa','Daniel'];

function saludarEstudiantes(alumno){
    console.log (`Hola, ${alumno}`);
}

while(estudiantes.length > 0) {
    console.log(estudiantes);
    var alumno = estudiantes.shift();
    saludarEstudiantes(alumno);
}