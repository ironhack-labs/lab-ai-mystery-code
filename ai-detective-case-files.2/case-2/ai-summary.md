## Caso 2 - La función críptica

**Qué hace realmente:**  
Comprueba si un string es un palíndromo: invierte el texto y compara si el invertido es igual al original.

**Por qué era “críptica”:**  
Usa nombres sin sentido (`q(q)`) y está escrita en una sola línea, lo que dificulta entenderla y mantenerla.

**Cómo lo mejoré:**  
- Renombré la función a `esPalindromo` y la variable a `texto`.  
- Separé los pasos (split → reverse → join → comparación).  
- Añadí comentarios claros y pruebas con ejemplos.