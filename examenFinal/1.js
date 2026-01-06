/*Necesitamos encontrar todos los estudiantes de Mosquera que estudien 
en la Universidad Nacional */

const dbStudents = require("./students_db.json");
const dbUniversites = require("./universities_db.json");


function encontrarEstudiantesDeMosquera(){
    let foundStudent
    for (const student of dbStudents) {
      
        foundStudent = student.originCity
        if(foundStudent === "Mosquera"){

     return foundStudent.firstName
  
         }

        
for (const university of dbUniversites) {
    if(university.universityName === "Universidad Nacional"){
    }
}      
        }
    
    return foundStudent
}

console.log(encontrarEstudiantesDeMosquera())


