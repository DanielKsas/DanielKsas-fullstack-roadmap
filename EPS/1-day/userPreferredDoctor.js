/* Necesitamos obtener cual es el doctor preferido (mas visitado) de un usuario dado, 
para esto crea una funcion llamada userPreferredDoctor que reciba 
como parametro el nombre de un usuario y retorne el nombre del doctor de preferencia.*/


const doctorsDb = require ("../medical_history.json")
const userDb = require ("../user-database.json")


function userPreferredDoctor(nameTyped){


contadorCitasPreferidas = 0

const nameUserTyped = nameTyped.toLowerCase()
let foundUser

for (const preferencyUser  of userDb) {
    let fullName = (preferencyUser.firstName + " " + preferencyUser.lastName).toLowerCase();
    
    if(fullName === nameUserTyped){
foundUser = preferencyUser.userId
break
 }
}

if(!foundUser) return null
const doctorCount = {}

for (const record of doctorsDb) {
    if(record.userId === foundUser){
        const doctor = record.doctor
        doctorCount[doctor] = 
        (doctorCount[doctor] || 0) +1
    }
}


let preferredDoctor = null
let max = 0

for (const doctor in doctorCount) {
    if (doctorCount[doctor] > max) {
max = doctorCount[doctor]
preferredDoctor = doctor
    } 
}
return preferredDoctor
}




console.log(userPreferredDoctor("Marta Solarte"))