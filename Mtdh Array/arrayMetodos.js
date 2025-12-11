/*
🚀 MÉTODOS FUNDAMENTALES DE ARRAYS (con ejemplos sencillos)
🟦 1. push() – Agrega un elemento al final
let arr = [1, 2];
arr.push(3); 
console.log(arr); // [1, 2, 3]

🟦 2. pop() – Elimina el último elemento
let arr = [1, 2, 3];
arr.pop();
console.log(arr); // [1, 2]

🟦 3. shift() – Elimina el primer elemento
let arr = [1, 2, 3];
arr.shift();
console.log(arr); // [2, 3]

🟦 4. unshift() – Agrega un elemento al inicio
let arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]

🔄 Métodos de transformación
🟩 5. map() – Crea un nuevo array transformando cada elemento
let nums = [1, 2, 3];
let dobles = nums.map(function(n){ return n * 2; });
console.log(dobles); // [2, 4, 6]

🟩 6. filter() – Filtra valores según una condición
let nums = [1, 2, 3, 4];
let pares = nums.filter(function(n){ return n % 2 === 0; });
console.log(pares); // [2, 4]

🟩 7. reduce() – Reduce el array a un solo valor
let nums = [1, 2, 3];
let suma = nums.reduce(function(a, b){ return a + b; }, 0);
console.log(suma); // 6

🟩 8. forEach() – Recorre cada elemento del array
let arr = ["a", "b", "c"];
arr.forEach(function(item){ console.log(item); });

🔎 Métodos de búsqueda
🟦 9. find() – Encuentra el primer elemento que cumple condición
let nums = [3, 7, 10];
let encontrado = nums.find(function(n){ return n > 5; });
console.log(encontrado); // 7

🟦 10. findIndex() – Igual a find(), pero devuelve el índice
let nums = [3, 7, 10];
let idx = nums.findIndex(function(n){ return n > 5; });
console.log(idx); // 1

🟦 11. includes() – Comprueba si un valor existe
let arr = [1, 2, 3];
console.log(arr.includes(2)); // true

🟦 12. indexOf() – Busca un valor y devuelve el índice
let arr = ["a", "b", "c"];
console.log(arr.indexOf("b")); // 1

🟦 13. lastIndexOf() – Busca desde el final
let arr = [1, 2, 3, 2];
console.log(arr.lastIndexOf(2)); // 3

✂️ Métodos de modificación del array
🟥 14. splice() – Agrega, quita o reemplaza elementos
let arr = [1, 2, 3, 4];
arr.splice(1, 2); 
console.log(arr); // [1, 4]

🟥 15. slice() – Crea una copia parcial del array
let arr = [1, 2, 3, 4];
let parte = arr.slice(1, 3);
console.log(parte); // [2, 3]

🔄 Reordenamiento
🟧 16. sort() – Ordena elementos
let arr = [3, 1, 2];
arr.sort();
console.log(arr); // [1, 2, 3]

🟧 17. reverse() – Invierte el array
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]

🧩 Métodos de combinación y transformación a texto
🟨 18. concat() – Une arrays
let a = [1];
let b = [2];
console.log(a.concat(b)); // [1, 2]

🟨 19. join() – Convierte el array en texto
let arr = ["a", "b", "c"];
console.log(arr.join("-")); // "a-b-c"

🟨 20. toString()
let arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"

🟦 21. flat() – Aplana arrays dentro de arrays
let arr = [1, [2, 3]];
console.log(arr.flat()); // [1, 2, 3]

🟦 22. flatMap()
let arr = [1, 2];
let result = arr.flatMap(function(n){ return [n, n * 2]; });
console.log(result); // [1, 2, 2, 4]

🔁 Iteradores (menos usados pero existen)
🟩 23. keys()
let arr = ["a", "b"];
let k = arr.keys();
console.log([...k]); // [0, 1]

🟩 24. values()
let arr = ["a", "b"];
let v = arr.values();
console.log([...v]); // ["a", "b"]

🟩 25. entries()
let arr = ["a", "b"];
let e = arr.entries();
console.log([...e]); // [[0,"a"], [1,"b"]]

🟩 26. every() – Todos cumplen condición
let arr = [2, 4, 6];
console.log(arr.every(function(n){ return n % 2 === 0; })); // true

🟩 27. some() – Alguno cumple condición
let arr = [1, 3, 4];
console.log(arr.some(function(n){ return n % 2 === 0; })); // true */