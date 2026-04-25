# AI Summary

## Caso 1: Bucle Infinito

🧠 Prompt usado:
“¿Qué está mal en este bucle de JavaScript? Explica por qué falla y cómo arreglarlo.”

🤖 La IA sugirió:
El bucle nunca incrementa `i`, provocando un bucle infinito cuando el primer elemento no es par. Había que añadir `i++` dentro del `while`.

💡 Mi aprendizaje:
La lección importante no era solo añadir `i++`, sino identificar la intención de la función: comprobar si un array contiene al menos un número par.

✅ Solución:

- Añadí `i++` para que el bucle avance.
- Probé con arrays que devuelven tanto true como false.
- Mantuve la lógica original corrigiendo el error.

Lo que aprendí:

- Depurar empieza por entender la intención del código.
- Pequeñas omisiones pueden romper algoritmos completos.

---

## Caso 2: Función Críptica

🧠 Prompt usado:
“Explica esta función paso a paso y sugiere mejores nombres.”

🤖 La IA sugirió:
La función comprueba si una palabra es un palíndromo invirtiendo la cadena y comparándola con la original.

💡 Mi aprendizaje:
El código funcionaba, pero era poco legible. La verdadera mejora estuvo en usar nombres claros.

✅ Solución:

- Renombré la función con un nombre más descriptivo.
- La reescribí de forma más legible.
- Añadí pruebas con palabras de ejemplo.

Lo que aprendí:

- Nombrar bien también es escribir buen código.
- Refactorizar muchas veces es mejorar claridad, no cambiar comportamiento.

---

## Caso 3: Desastre Sobrediseñado

🧠 Prompt usado:
“Simplifica esta función en JavaScript simple. ¿Cuál es su intención real?”

🤖 La IA sugirió:
La función únicamente hace una suma (`a + b`) de forma innecesariamente complicada.

💡 Mi aprendizaje:
Lo importante fue detectar que el bucle escondía una operación muy simple.

✅ Solución:

- Refactoricé toda la función a una arrow function de una sola línea.
- Reduje complejidad de un bucle a tiempo constante.

Complejidad original:

- O(b)

Complejidad refactorizada:

- O(1)

Lo que aprendí:

- A veces código complejo hace algo muy simple.
- Refactorizar puede mejorar legibilidad y rendimiento.

---

# Reflexión

## ¿Qué tipo de ayuda de IA me sirvió más?

La depuración y las explicaciones me ayudaron más, especialmente para entender la intención del código antes de modificarlo.

## ¿Qué aprendí sobre mi forma de pensar?

Tiendo a fijarme primero en errores de sintaxis, pero este laboratorio me recordó analizar comportamiento e intención antes de arreglar código.

## ¿Dependí demasiado de la IA?

Usé la IA sobre todo para explicación y comparación, no para generar soluciones sin pensar. Podría mejorar intentando resolver más por mi cuenta antes de consultarla.

---

## Conclusiones

- La IA es útil como apoyo para razonar, no solo para dar respuestas.
- Entender código es distinto de simplemente hacer que funcione.
- El código limpio muchas veces surge eliminando complejidad innecesaria.
