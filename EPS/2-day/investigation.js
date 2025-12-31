/* El gobierno nacional nos acaba de informar sobre una irregularidad en nuestros centros de atencion, 
resulta que por ley ningun doctor puede atender mas de 4 especialidades diferentes entonces el gobierno 
nos esta pidiendo un informe sobre los doctores que han atendido mas de 4 especialidades, crea un script 
para encontrar una lista de esos doctores y las especialidades que han impartido.
 (nota: debes crear una lista con objetos donde cada objeto tenga el nombre del doctor 
 y una lista con las especialidades que ha dado*/

 const medicalHistory = require("../medical_history.json")

 function doctorsWithManySpecialities(){

const doctorSpecialties = {}

for (const record of medicalHistory) {
    const doctor = record.doctor
    const speciality = record.speciality


    if (!doctorSpecialties[doctor]){
        doctorSpecialties[doctor] = []
    }


    if(!doctorSpecialties[doctor].includes(speciality)) {

        doctorSpecialties[doctor].push(speciality)
    }
}

const result = []


for (const doctor in doctorSpecialties) {
    if (doctorSpecialties[doctor].length > 4) {
        result.push({
            doctor: doctor,
            specialities: doctorSpecialties[doctor]
        })
    }
    
}

return result
 }

 console.log(doctorsWithManySpecialities())