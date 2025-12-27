const mockUsers = require("../user-database.json")


function userCity(findByuserIdOrFullName){

    const search = findByuserIdOrFullName.toLowerCase()

for (const user of mockUsers) {

    if(user.userId.toLowerCase() === search) {
        return user.city
    }

    let fullName = (user.firstName + " " + user.lastName).toLowerCase()
  

    if(fullName === search){
        return user.city
    }
}
return "Usuario no existe"
}
console.log(userCity("uSR_001"))