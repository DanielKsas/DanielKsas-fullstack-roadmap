/* Necesitamos crear una funcion que nos permita identificar si un estudiante aprobo una materia, 
para esto la funcion debe recibir el nombre completo del estudiante y el nombre de la materia como
 parametros, debe retornar "true" si aprobo la materia o "false" si la reprobo. Nota: Cada estudiante 
 tiene varias calificaciones en cada materia, para determinar si paso la materia, el promedio de las 
 calificaciones debe ser superior a 3.*/

const dbStudents = require("./grades_db.json")

 function notaEstudiante(fullNameStudent){


    const userNameInLow = userNameToFind.toLowerCase()


    for (const notaEstudiante of dbStudents) {
        if(notaEstudiante.nota >= 3){
            return true
        }
        else {
            return false
    }
    }


 }

 console.log(notaEstudiante())