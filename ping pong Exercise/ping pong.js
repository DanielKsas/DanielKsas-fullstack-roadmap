/*crear una función que tenga 4 parametros
(player1, player2, ScorePlayer1, ScorePlayer2).
Indicar quien saca dependiendo del puntaje de los jugadore,
cada 2 puntos cambia el saque, y siempre empiza sacando
jugador1*/



function WhoHasToServe(player1, player2, scorePlayer1, scorePlayer2){

let scoreTotal = scorePlayer1 + scorePlayer2
let servingShifts =(scoreTotal - (scoreTotal % 2)) /2;
if(servingShifts %2===0){
  console.log("Es turno de "+ player1)

}
else{

  console.log("Es turno de " + player2)
}
return scoreTotal


}

let totalGlobal = WhoHasToServe("Danel", "Difa", 19, 4)

console.log("score total " + " " + totalGlobal)




