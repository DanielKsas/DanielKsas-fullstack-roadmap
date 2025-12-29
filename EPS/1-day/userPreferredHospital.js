/* Necesitamos obtener cual es el hospital de preferencia (mas usado) de un usuario dado, 
para esto crea una funcion llamada userPreferredHospital que reciba como parametro el nombre 
de un usuario y retorne el nombre del hospital de preferencia.*/

const medicalHistory = require("../medical_history.json");
const userDatabase = require("../user-database.json");

function userPreferredHospital(userNameToFind){

    let contadorHospitalMasVisitado = 0
    const userNameInLow = userNameToFind.toLowerCase()

for (const user of userDatabase) {
    let fullName = (user.firstName + " " + user.lastName).toLowerCase();
    if( fullName === userNameInLow){
        
    }
}

}
