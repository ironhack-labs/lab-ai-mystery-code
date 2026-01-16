#### Case 1 : Infinite loop

# Prompt used :

"I am beginner with Javascript and try to create a function with a loop that should return a boolean but my code is not working. Can you help me to understand without giving the solution and be brief. My code : function mystery1(arr) { let i = 0; while (i < arr.length) { if (arr[i] % 2 === 0) { return true; } } return false; }"

# AI suggested :

"Make sure the loop counter changes (i++) or the loop will run forever."

### Case 2: The cryptic function

# Prompt used :

"I am new in javascript and I'm trying to understand this function : function q(q){return q.split('').reverse().join('')==q} Can you explain me step by step what this fucntion is really doing. Be brief with your explanation"

# AI suggested :

"q.split('') → Converts the string q into an array of characters.
Example: "hello".split('') → ['h','e','l','l','o']

.reverse() → Reverses the array.
Example: ['h','e','l','l','o'].reverse() → ['o','l','l','e','h']

.join('') → Joins the array back into a string.
Example: ['o','l','l','e','h'].join('') → "olleh"

== q → Compares the reversed string to the original string.
If they are the same, it returns true; otherwise false.

This function checks if a string is a palindrome (reads the same forwards and backwards)."

### Case 3: The Over-Engineered Mess

# Prompt used :

"Can you simplify this function and explain what it does"

# AI suggested :

x = a → start with x equal to a
y = b → start with y equal to b (but notice: y isn’t used in the final result!)

The for loop runs b times:

Each time, x increases by 1 (x = x + 1)
y decreases by 1 (y = y - 1) → but this does not affect the result

After the loop, x has been increased b times.
So mathematically, x = a + b
