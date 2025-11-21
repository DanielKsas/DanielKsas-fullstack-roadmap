let soccerPlayer2 = {
    name: "Lionel",
    lastName: "Messi",
    age: 38,
    nationality: "Argentinean",
    position: "forward",
    club: "Inter Miami",
    height: 1.89,
    scores: 1000
}

delete soccerPlayer2.scores

function EliminarUnaPropiedad(){
let nombresPropiedades = [];
for (let messiKey in soccerPlayer2) {
    nombresPropiedades.push(messiKey)
}
return nombresPropiedades
}

console.log(EliminarUnaPropiedad())