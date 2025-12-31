/* Por orden del gobierno debemos informar cuales hospitales del pais estan atendiendo 
la mayor cantidad de pacientes, para esto crea una funcion llamada busiestHospitals que 
retorne una lista de los 3 hospitales mas usados, los objetos de la lista deben tener la siguiente 
estrucutra:

{ hospitalName: "Clínica Especialistas de Sincelejo" usersServed: 1200 }*/

const medicalHistory = require("../medical_history.json");


function busiestHospitals(){

const hospitalCount = {}

for (const record of medicalHistory) {
    const hospital = record.hospitalName
    hospitalCount[hospital] = 
    (hospitalCount[hospital] || 0) + 1
}

const hospitalsArray = []

for (const hospital in hospitalCount) {
  hospitalsArray.push({
    hospitalName: hospital,
    userServed: hospitalCount[hospital]
  }) 
}

hospitalsArray.sort((a,b) =>
    b.userServed - a.userServed)

return hospitalsArray.slice(0,3)
    
}

console.log(busiestHospitals())