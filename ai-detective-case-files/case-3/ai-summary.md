### Case 3: The Over-Engineered Mess

#### 🧠 Prompt(s) Used:
- "What does this function really do? Explain step by step."
- "Can this be simplified to a one-liner?"
- "Why is the variable y declared but never used?"
- "What's the time complexity of this approach vs a simpler solution?"

#### 🤖 AI Response Summary:
- The function adds two numbers (a + b) using an unnecessarily complex loop
- It starts with x = a, then adds 1 to x exactly b times
- Variable y is completely unused - it's a red herring/distraction
- The loop has O(b) time complexity when addition is O(1)
- AI suggested replacing the entire function with: `return a + b`

#### 💡 My Understanding:
- The loop runs b iterations: x starts at a, then becomes a+1, a+2, ... until a+b
- This is a convoluted way to perform simple addition
- The unused variable y suggests the original coder didn't clean up their code
- Over-engineering makes code harder to read, maintain, and debug
- Sometimes the simplest solution (a + b) is the best solution

#### ✅ The Fix:
- Renamed function from `complicatedCalc` to `add` (clear, descriptive name)
- Removed unnecessary variables x, y, and loop counter i
- Replaced entire loop logic with a single addition operation: `return a + b`
- Added JSDoc documentation explaining parameters and return value
- Reduced time complexity from O(b) to O(1)
- Created one-liner arrow function version: `const add = (a, b) => a + b`

#### 🎯 What I Learned:
- Don't over-engineer simple operations - keep it simple (KISS principle)
- Unused variables are code smells that indicate poor code quality
- Loops aren't always necessary - sometimes they just add complexity
- Performance matters: O(1) is much better than O(b) for basic math
- Clear function names like `add` are better than vague names like `complicatedCalc`
- The most elegant code is often the shortest and most readable