/*Write a function that receives an array of numbers and returns the average of all 
even numbers in the array
If the array contains no even numbers, return "Not even numbers".
Example:
Input: [2, 5, 8, 11]
Even numbers → 2, 8
Average → (2 + 8) / 2 = 5
Hint: recorrer el arreglo, filtrar pares, sumar y dividir. */


function anythingIdk(numberArray) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 === 0) {
            sum += numberArray[i];
            count++;
        }
    }

    if (count === 0) {
        return "Not even numbers";
    }

    return sum / count;
}
console.log(anythingIdk([2, 5, 8, 11]))


/*2. Write a function that receives an array of integers and returns a new array with all 
the numbers whose square is greater than 50.
Rules:
Ignore negative numbers.
Return an empty array if none meet the condition.
Example:
Input: [3, 8, -2, 10, 5]
Squares → 9, 64, -, 100, 25
Output → [8, 10]
Hint: condicionales + filtros */


function AgainAnything(anyNumber) {

    let newArray = []

    for (let i = 0; i < anyNumber.length; i++) {

        let squareResult = anyNumber[i] ** 1;

        
        if (anyNumber[i] * squareResult > 50) {

            newArray.push(anyNumber[i] * squareResult) //No modificar

        }
    
    
    }
    return newArray
  }
    


console.log(AgainAnything([9, 8, 10, 2]))

/*3. You receive an array of student objects in this format:
{
  name: "Laura",
  grades: [80, 70, 90, 100]
}
Write a function that must:
1. Calculate the average grade for each student.
2. Determine whether the student passes or fails based on this rule:
Average ≥ 75 → "Pass"
Average < 75 → "Fail"
3. Return a new array of objects with this structure:
{
  name: "Laura",
  average: 85,
  status: "Pass"
}
Example input:
[
  { name: "Laura", grades: [80, 70, 90] },
  { name: "Mark", grades: [50, 60, 55] }
]
Expected output:
[
  { name: "Laura", average: 80, status: "Pass" },
  { name: "Mark", average: 55, status: "Fail" }
]
Hint:Recorrer objetos
1:30
*/


/*4. Write a function that receives:
An array of numbers
A target number
Return all pairs of numbers from the array that add up to the target.
Rules:
Each pair must contain two different positions.
A number cannot be reused.
Pairs must not be duplicated.
Example:
Input:
Array → [1, 7, 5, 3, 9, 2]
Target → 10
Valid pairs:
1 + 9
7 + 3
5 + 5 (ignored because only one 5 exists)
Output:
[[1, 9], [7, 3]]
Hint: usar bucles anidados, evitar duplicados
Jose Vargas
  11:07 AM
1. Write a function that receives an array of numbers and returns how many of those numbers are above the average of the array.
Example:
Input → [10, 20, 30, 40]
Average → (10 + 20 + 30 + 40) / 4 = 25
Numbers above average → 30, 40 → Output: 2
Hint: Calcular promedio, Recorrer arreglo, Contar con condicionales*/



/*2. Write a function that receives an array of integers and returns the largest difference between two elements, where the larger number must appear after the smaller number.
This simulates buying and selling a stock.
Example:
Input → [7, 1, 5, 3, 6, 4]
Possible differences:
1 → 6 = 5
1 → 5 = 4
3 → 6 = 3
Output → 5
If no profit is possible, return 0.
Hint: Comparar elementos manteniendo orden , Logica matematica + tracking de valores mínimos */

/*3. You receive an array of car objects in the following format:
{
  brand: "Toyota",
  year: 2018,
  price: 12000
}
Write a function that returns a new array containing only the cars that meet both conditions:
year is greater than or equal to 2015
price is less than or equal to 15000
If no cars match, return an empty array.
Example input:
[
  { brand: "BMW", year: 2012, price: 18000 },
  { brand: "Toyota", year: 2018, price: 12000 },
  { brand: "Kia", year: 2020, price: 16000 }
]
Output:
[
  { brand: "Toyota", year: 2018, price: 12000 }
]
Hint: Recorrer objetos, Aplicar multiples condiciones, Construir un nuevo arreglo */


/*4. You receive an array of employee objects in this format:
{
  name: "Juan",
  sales: 3500,
  satisfaction: 0.9 // between 0 and 1
}
Write a function that calculates the bonus for each employee using these rules:
Base bonus = 10% of sales
If satisfaction score is 0.8 or higher, increase bonus by 20%
If sales exceed 5000, add an extra $200
Return a new array of objects:
{
  name: "...",
  bonus: calculatedBonus
}
Example input:
[
  { name: "Ana", sales: 6000, satisfaction: 0.85 },
  { name: "Luis", sales: 3000, satisfaction: 0.75 }
]
Expected output (simplified example):
[
  { name: "Ana", bonus: ... },
  { name: "Luis", bonus: ... }
]
hint: Recorrer objetos, Aplicar múltiples reglas de negocio, Crear estructura nueva
11:09
Apuesto la prima, que a que hoy preguntan esto relacionado con el ejercicio de ayer
11:09
asi que haganlos */

