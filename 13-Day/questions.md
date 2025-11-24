1.Cuáles es la principal diferencia entre coersión y conversión de tipos en JS?
R//La principal diferencia es que la coerción de tipos es implícita, mientras que la conversión de tipos puede ser implícita o explícita

2. Mencionar dos valores de JavaScript que al someterse a coerción implícita a booleano, se consideran falsy (falsos), según la lista proporcionada en el artículo.
R// Cualquier par de esta lista: false, 0, null, undefined, la cadena vacía (""), NaN, o -0.

3.Pregunta: ¿Cuál es el resultado de la siguiente expresión de JavaScript y por qué?

10 + "5"

R//: El resultado es "105". Esto ocurre porque el operador de suma (+), al encontrar un string como operando, prioriza la concatenación de cadenas en lugar de la adición numérica, convirtiendo el 10 en el string "10".

4.A diferencia del operador de suma (+), ¿qué hace JavaScript con un string cuando se utiliza en una expresión con operadores matemáticos como la multiplicación (*), la resta (-) o la división (/)?

R// Intenta convertir el string a su equivalente numérico, de forma similar a como lo haría la función Number(). Si el string contiene caracteres no numéricos, el resultado será NaN.

Pregunta: ¿Cómo define el artículo la coerción implícita en JavaScript?

Respuesta: Es el proceso por el cual JavaScript intenta convertir automáticamente un tipo de valor inesperado al tipo que se espera en una operación (por ejemplo, pasar un string donde se espera un number).