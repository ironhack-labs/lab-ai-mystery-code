

# Prompt 

In a short sentence tell me why this code fails? 

function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}

# Suggestion

Increase the counter with i++

# Reflection

Careful not to 'infinite loop' by increasing or decreasing the counter. 