/*Un proveedor internacional de medicamentos nos acaba de informar 
que hubo un error con un lote de pregabalina que suministramos en 
nuestros centros medicos, de nuestro sistema de informacion de 
inventario nos informan que ese lote fue consumido en su totalidad 
durante el 2024, teniendo esta informacion crea un script que permita 
identificar que pacientes fueron medicados con pregabalina durante 
el 2024, rapidooo necesitamos contactar a estos usuarios (
en el resultado debe estar el correo de los usuarios para poder 
contactarlos)*/

const medicalHistory = require("../medical_history.json");
const userDatabase = require("../user-database.json");

function medicadosConPregabalina(){

const affectedUserIds = new Set();

for (const record of medicalHistory) {
if (! Array.isArray(record.medicationsUsed))

    continue;

    const medications = record.medicationsUsed.filter(med => typeof med === "string")
    .map(med => med.toLowerCase())
if (record.date.startsWith("2024") &&
    medications.includes("pregabalina"))
    {
        affectedUserIds.add(record.userId)
    }
   
}


const result = []

for (const user of userDatabase) {
    if(affectedUserIds.has(user.userId)){
        result.push({
            userId: user.userId, 
        fullName: `${user.firstName} ${user.lastName}`,
    email:user.email})

    }
}

return result
}

console.log(medicadosConPregabalina())