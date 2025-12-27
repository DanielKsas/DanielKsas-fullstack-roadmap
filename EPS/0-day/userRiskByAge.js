const mockUsers = require("../user-database.json")

function userRiskByAge(userName){
    
let searchName = userName.toLowerCase()

for (const user of mockUsers) {
    let fullName = (user.firstName + " " + user.lastName).toLowerCase();

    if(fullName === searchName){
        if(user.age > 60){
            return "alto"
        }
        if(user.age >= 45 && user.age <= 60){
            return "medio"
        }

        if(user.age < 40){
            return "bajo"
        }
    }
}
return "Usuario no existe";
}
console.log(userRiskByAge("laura Betancur"))