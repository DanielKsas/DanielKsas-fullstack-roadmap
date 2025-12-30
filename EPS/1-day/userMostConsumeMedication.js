/*Necesitamos obtener cual es el medicamento mas consumido de un usuario dado, 
para esto crea una funcion llamada userMostConsumedMedication que reciba como parametro
 el nombre del usuario y retorne el nombre del medicamento mas usado. */

const medicalHistory = require("../medical_history.json");
const userDatabase = require("../user-database.json");

function userMostConsumedMedication(nomUsua) {

    const searchName = nomUsua.toLowerCase()

    let foundUserId

    for (const user of userDatabase) {
        let fullName = (user.firstName + " " + user.lastName).toLowerCase();
        if (fullName === searchName) {
            foundUserId = user.userId
            break
        }
    }


    if (!foundUserId) return null
    const medicationCount = {}

    for (const record of medicalHistory) {
        if (record.userId === foundUserId) {

            for (const medication of record.medicationsUsed) {
                medicationCount[medication] = (medicationCount[medication] || 0) + 1
            }
        }
    }

    let mostUsed = null
    let max = 0

    for (const med in medicationCount) {
        if (medicationCount[med] > max) {
            max = medicationCount[med]
            mostUsed = med
        }
    }

    return mostUsed
}
console.log(userMostConsumedMedication("saray serna"))