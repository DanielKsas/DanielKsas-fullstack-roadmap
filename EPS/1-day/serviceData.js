
const medicalHistory = require("../medical_history.json");

function serviceData(idService){

    const searchIdServece = idService.toLowerCase()

for (const service of medicalHistory) {
    
    if(service.serviceId.toLowerCase() === searchIdServece){
        return service
    }
}
 return "Id ingresado incorrecto"
}

console.log(serviceData("srV_0002"))