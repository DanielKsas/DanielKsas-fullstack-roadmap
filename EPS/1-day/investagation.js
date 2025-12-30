/* Oh nooo! nos acaban de informar que el doctor Luis Burbano realizo un robo en uno de nuestros 
centros medicos, por favor crea un script que nos de una lista de los hospitales en los que ha trabajado 
el doctor burbano para poder informar a los respectivos centros medicos y que ellos 
puedan realizar una investigacion.*/

const medicalHistory = require("../medical_history.json");

function investagation(doctorName){

const searchDoctorName = doctorName.toLowerCase()
const hospitalsHistorySet = new Set()



for (const historialDoctors of medicalHistory) {
    
    if(historialDoctors.doctor.toLowerCase() === searchDoctorName){
hospitalsHistorySet.add(`${historialDoctors.hospitalName}`)
        
 
    }

}
const hospitalHistoryDoctor = [...hospitalsHistorySet]
return hospitalHistoryDoctor

}

console.log(investagation("Dr. Luis Burbano"))



