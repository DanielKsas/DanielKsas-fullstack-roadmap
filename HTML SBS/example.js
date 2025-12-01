/*Write a JavaScript program 
to check two given non-negative 
integers if one (not both) is a multiple of 7 or 11 */



function checkingIfItsMultipleSevenOrEleven(numberOne, numberTwo){
if(numberOne %7 === 0 || numberOne %11 === 0 ){

   return true;
} 


else if(numberTwo %7 === 0 || numberTwo %11 === 0){
return true;
}

else{
    return false;
}
} 

