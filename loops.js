var estudiantes = [ "maria", "sergio", "rosa", "daniel"];

function saludarEstudiantes(estudiante){
console.log(`hola, ${estudiante}`);
}


//for
for(var i = 0 ; i < estudiantes.length ; i++){
 saludarEstudiantes(estudiantes[i]);
}


//for of

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

// while

while(estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

