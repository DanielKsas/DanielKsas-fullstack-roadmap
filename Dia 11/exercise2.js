function esPalindroma(palabra) {
    palabra = palabra.toLowerCase(); 
    let palabraInvertida = palabra.split("").reverse().join("");

    return palabra === palabraInvertida;
}

console.log(esPalindroma("Oso"));       
