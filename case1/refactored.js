// Funktion checkt, ob es im Array eine gerade Zahl gibt
function checkEvenNumber(arr) {
  let i = 0;
  
  // Schleife läuft durch die Zahlen durch
  while (i < arr.length) {
    // Wenn die Zahl durch 2 teilbar ist, ist sie gerade -> true
    if (arr[i] % 2 === 0) {
      return true;
    }
    // Das i++ hat gefehlt, sonst bleibt die Schleife ewig auf der gleichen Stelle
    i++;
  }
  
  return false;
}