## Caso 1 - Bucle infinito (mystery1)

**Qué intentaba hacer el código:**  
Devolver `true` si el array contiene al menos un número par. Si no, devolver `false`.

**Por qué estaba roto:**  
Dentro del `while` no se incrementaba el índice `i`. Si el primer elemento era impar, el bucle no avanzaba y se quedaba en un bucle infinito.

**Cómo lo solucioné:**  
Añadí `i++` al final del bucle para avanzar por el array, mantuve la lógica simple, añadí comentarios claros y probé la función con varios ejemplos.

**Pruebas usadas:**  
- `[1, 3, 5]` → `false`  
- `[1, 3, 4, 5]` → `true`  
- `[]` → `false`  
- `[2]` → `true`