## Caso 3 - El desastre sobrediseñado

**Qué hacía realmente:**  
Sumaba `1` a `a` un total de `b` veces y devolvía el resultado. Eso es equivalente a `a + b`.

**Qué estaba mal / por qué era sobrediseñado:**  
- Usa un bucle para hacer una suma que JavaScript ya puede hacer directamente.  
- La variable `y` se modifica pero no se usa para nada (código muerto).

**Refactor:**  
Reemplacé todo por una sola línea: `return a + b;` y añadí pruebas simples.