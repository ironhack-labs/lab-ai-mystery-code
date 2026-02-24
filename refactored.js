
 // Case 1
 // El objetivo es que la función devuelva true si almenos uno de los números de la array es par
 
function containsEvenNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Si el número es divisible entre dos es true
    if (arr[i] % 2 === 0) return true;
  }

  // Si no encuentra ningún número par en todo el loop, devuelve false
  return false;
}



 // Case 2
 // El objetivo es comprobar si el array es palindromo
function isExactPalindrome(text) {
    // Separa el string en un array de carácteres, lo pone del revés y vuelve a unir los carácteres en un string
  const reversed = text.split("").reverse().join("");
  return reversed === text;
}


 // Case 3

function add(a, b) {
  return a + b;
}
