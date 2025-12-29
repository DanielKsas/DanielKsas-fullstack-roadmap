const medicalHistory = require("../medical_history.json");
const userDatabase = require("../user-database.json");



function userServiceResume(nombreUsuario) {

    let userToreturn = {
        userId: "",
        firstName: "",
        lastName: "",
        totalAppointments: 0
    }

    const searchUserName = nombreUsuario.toLowerCase()

    for (const user of userDatabase) {

        let fullName = (user.firstName + " " + user.lastName).toLowerCase();

        if (searchUserName === fullName) {
            userToreturn.firstName = user.firstName
            userToreturn.lastName = user.lastName
            userToreturn.userId = user.userId
            break;
        }
    }

    for (const cita of medicalHistory) {
        if (cita.userId === userToreturn.userId) {
            userToreturn.totalAppointments++
        }

    }

    return userToreturn;
}

console.log(userServiceResume("marta Solarte"))