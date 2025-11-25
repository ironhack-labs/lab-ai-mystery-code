function fizzBuzz(n) {
  const result = [];
  
  // Loop from 1 to n (inclusive)
  for (let i = 1; i <= n; i++) {
    // Check if divisible by both 3 AND 5 (must check first!)
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } 
    // Check if divisible by 3 only
    else if (i % 3 === 0) {
      result.push('Fizz');
    } 
    // Check if divisible by 5 only
    else if (i % 5 === 0) {
      result.push('Buzz');
    } 
    // Not divisible by 3 or 5, use the number
    else {
      result.push(i);
    }
  }
  
  return result;
}

// Test it:
console.log(fizzBuzz(15));
// Expected: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]