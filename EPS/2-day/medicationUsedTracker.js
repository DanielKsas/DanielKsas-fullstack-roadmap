/*Por control medico debemos informar sobre la ultima vez que un usuario se le administro cierto
 medicamento, para esto crea una funcion llamada medicationUsedTracker, 
 la funcion debe recibir 2 parametros, el primer parametro puede ser el id del usuario o su
  nombre completo y el segundo parametro debe ser el nombre del medicamento, 
  la respuesta de la funcion debe dar la siguiente informacion:
{ userId: "", fullName: "", date: "", hospitalName: "" doctor: "" }
esos datos deben ser de la ultima vez que se le suministro el medicamento al usuario. */

const medicalHistory = require("../medical_history.json");
const userDatabase = require("../user-database.json");

function medicationUsedTracker(fullNameTyped, medicationTyped) {

const fullNameNormalized = fullNameTyped.toLowerCase()
    const medicatationNormalized = medicationTyped.toLowerCase()

    let foundUser = null

  
}

console.log(medicationUsedTracker( ))