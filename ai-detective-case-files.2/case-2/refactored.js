/**
 * CASO 2 - Función críptica
 *
 * Objetivo:
 * Comprobar si un texto es un palíndromo (se lee igual al derecho que al revés).
 * Ejemplos: "ana", "radar".
 *
 * Nota:
 * Esta versión compara el texto tal cual, es sensible a mayúsculas y espacios.
 * (Por ejemplo, "Ana" devolverá false porque "A" y "a" son diferentes)
 */
function esPalindromo(texto) {
  // 1) Convertimos el texto en un array de caracteres
  const caracteres = texto.split('');

  // 2) Invertimos el orden de los caracteres
  const caracteresInvertidos = caracteres.reverse();

  // 3) Volvemos a unir los caracteres para formar el texto invertido
  const textoInvertido = caracteresInvertidos.join('');

  // 4) Comparamos el texto original con el invertido
  return textoInvertido === texto;
}

// --- Pruebas manuales ---
console.log(esPalindromo('ana'));     // true
console.log(esPalindromo('radar'));   // true
console.log(esPalindromo('casa'));    // false
console.log(esPalindromo('Ana'));     // false (mayúsculas)
console.log(esPalindromo(''));        // true (caso borde: string vacío)