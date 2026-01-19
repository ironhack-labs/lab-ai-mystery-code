


# Prompt 

In a short sentence tell me why this code fails? 


function complicatedCalc(a, b) {
  let x = a;
  let y = b;
  
  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }
  return x;
}

# Suggestion

'Flatten' the code to its simplest form. This function is adding a + b.

# Reflection

Convoluted code is wasteful. 