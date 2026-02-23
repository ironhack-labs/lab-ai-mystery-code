Caso 1: Bucle infinito

🧠 Prompt usado:
“What’s wrong with this JS loop? Explain and fix it.”

🤖 La IA sugirió:
Que el while nunca incrementaba la variable i, por lo que si el primer elemento no era par, el bucle se volvía infinito. La solución fue añadir i++ dentro del bucle.

💡 Mi insight:
El problema no era la condición del if, sino que el índice nunca avanzaba. El bucle siempre evaluaba arr[0].

✅
Añadí i++ dentro del while para que el índice avanzara correctamente y el array se recorriera completo.

Caso 2: Función poco clara (palíndromo)

🧠 Prompt usado:
“Explain this function step-by-step and suggest better variable names.”

🤖 La IA sugirió:
Que la función comprobaba si un string era un palíndromo usando split(), reverse() y join(). También recomendó cambiar los nombres q(q) por algo más descriptivo como isPalindrome(word) y usar === en vez de ==.

💡 Mi insight:
La lógica era correcta, pero los nombres de variables hacían que el código fuera difícil de entender. Un buen naming mejora mucho la legibilidad.

✅
Renombré la función a isPalindrome, cambié el parámetro a word, guardé el resultado en reversedWord y usé comparación estricta ===.

Caso 3: Función innecesariamente complicada

🧠 Prompt usado:
“Simplify this function in plain JavaScript. What’s the intent?”

🤖 La IA sugirió:
Que el bucle simplemente incrementaba a exactamente b veces, por lo que la función realmente estaba calculando a + b. Recomendó reemplazar todo el bucle por return a + b;.

💡 Mi insight:
El código hacía algo muy simple de manera innecesariamente compleja. Detectar operaciones redundantes es clave para escribir código limpio.

✅
Reemplacé toda la lógica por una función simplificada que devuelve directamente a + b.