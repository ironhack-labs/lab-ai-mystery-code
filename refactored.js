/Caso 1
function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++;
  }
  return false;
}
mystery1([3, 6, 8, 1, 9]); //true
mystery1([3, 13, 17, 1, 9]); //false

//Caso 2
function palabraInversa(palabra) {
  return palabra.split("").reverse().join("") == palabra;
}
palabraInversa("oso"); //true
palabraInversa("Naty"); //false

//Caso 3
const complicatedCalc = (a, b) => a + b;
complicatedCalc(12, 2)//14
