let soccerPlayer = {
    name: "Cr7",
    lastName: "Ronaldo",
    age: 40,
    nationality: "Portuguese",
    position: "forward",
    club: "Al nassr",
    height: 1.89,
}

function devolverLosNombresDePropiedades(){

    let nombresPropiedades = [];

 for (let cr7Key in soccerPlayer) {
  nombresPropiedades.push(cr7Key)
 }
  return nombresPropiedades;
}

console.log(devolverLosNombresDePropiedades())