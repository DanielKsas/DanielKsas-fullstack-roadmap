/* necesitamos obtener una lista de usuarios que han visitado un hospital dado, 
para esto crea una funcion llamada hospitalUsers que reciba como parametro el nombre 
del hospital y que retorne un array con el nombre COMPLETO de los usuarios que han visitado
 ese hospital ej:

["Diego Sánchez", "Isabella Flores", "Fernando Sierra"]*/



const medicalHistory = require("../medical_history.json");
const userDatabase = require("../user-database.json");

function hospitalUsers(nameHospital) {

    const patientsNameSet = new Set()
    const patientsInTheHospital = nameHospital.toLowerCase()

    for (const cita of medicalHistory) {
        if (cita.hospitalName.toLowerCase() === patientsInTheHospital) {

            for (const user of userDatabase) {

                if (user.userId === cita.userId) {
                    patientsNameSet.add(`${user.firstName} ${user.lastName}`)
                }

            }

        }

    }

    const patientsArray = [...patientsNameSet]

    return patientsArray
}

console.log(hospitalUsers("Clínica Arauca"))