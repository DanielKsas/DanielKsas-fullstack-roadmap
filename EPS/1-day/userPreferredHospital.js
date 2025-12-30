/* Necesitamos obtener cual es el hospital de preferencia (mas usado) de un usuario dado, 
para esto crea una funcion llamada userPreferredHospital que reciba como parametro el nombre 
de un usuario y retorne el nombre del hospital de preferencia.*/

const medicalHistory = require("../medical_history.json");
const userDatabase = require("../user-database.json");

function userPreferredHospital(userNameToFind){

   
    const userNameInLow = userNameToFind.toLowerCase()

    let foundUser

for (const user of userDatabase) {
    let fullName = (user.firstName + " " + user.lastName).toLowerCase();
    if( fullName === userNameInLow){
     foundUser = user.userId
     break
    }
}

if(!foundUser) return null

const hospitalCount = {}

for (const record of medicalHistory) {
    if(record.userId === foundUser) {

        const hospital = record.hospitalName
        hospitalCount[hospital] = (hospitalCount[hospital] || 0) + 1
    }
}

let preferredHospital = null
let max = 0

for (const hospital in hospitalCount) {
    if( hospitalCount [hospital] > max) {
        max = hospitalCount[hospital]
        preferredHospital = hospital
    }
}

return preferredHospital
}

console.log(userPreferredHospital("Marta Solarte"))
