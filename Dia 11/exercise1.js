let contador = 0
let palabraParaContar = "Hola"
let vocales = "aeiou"

for (let i = 0; i < palabraParaContar.length; i++ ) {

    let letra = palabraParaContar.charAt(i)

    if(vocales.includes(letra))
    {
        contador++
    }
    
}
 console.log(palabraParaContar + ":  " +"La cantidad de vocales en la palbra son: "+contador)

