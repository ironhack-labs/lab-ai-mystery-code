/**
 * CASO 3 - Desastre sobrediseñado
 *
 * Qué hace realmente:
 * - Empieza con x = a y, en un bucle que se repite b veces, suma 1 a x.
 * - Eso equivale a: x = a + b
 *
 * Nota:
 * - La variable y no afecta al resultado final (se resta pero nunca se usa).
 */
function calculoSimple(a, b) {
  // Refactor a una sola línea: sumar b a a
  return a + b;
}

// --- Pruebas manuales ---
console.log(calculoSimple(5, 3));   // 8
console.log(calculoSimple(10, 0));  // 10
console.log(calculoSimple(-2, 4));  // 2