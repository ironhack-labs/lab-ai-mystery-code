/**
 * CASO 1 - Bucle infinito
 *
 * Objetivo:
 * - Devolver true si el array contiene al menos un número par.
 * - Devolver false si no hay ningún número par.
 *
 * Problema del código original:
 * - La variable i nunca aumenta dentro del while.
 * - Si el primer número no es par, el bucle se queda infinito.
 */
function mystery1(arr) {
  let i = 0; // Índice para recorrer el array desde el inicio

  // Recorremos el array mientras i sea un índice válido
  while (i < arr.length) {
    // Si el número actual es par, ya podemos devolver true
    if (arr[i] % 2 === 0) {
      return true;
    }

    // IMPORTANTE: avanzamos al siguiente elemento para evitar bucle infinito
    i++;
  }

  // Si terminamos el bucle, es que no había ningún número par
  return false;
}

// --- Pruebas manuales ---
console.log(mystery1([1, 3, 5]));      // false
console.log(mystery1([1, 3, 4, 5]));   // true
console.log(mystery1([]));            // false
console.log(mystery1([2]));           // true