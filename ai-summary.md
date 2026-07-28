## Case 1: The Infinite Loop

**Prompt used:**
> "What's wrong with this JavaScript loop? Explain and fix it."

**AI suggested:**
- The loop never increments the variable `i`, causing an infinite loop.
- Rename the function to make its purpose clearer.
- Add comments explaining each step.

**My insight:**
I learned that every `while` loop needs a way to eventually stop. In this case, `i` never changed, so the condition `i < arr.length` stayed true forever.

**Fix:**
- Added `i++` inside the loop.
- Renamed the function to `containsEvenNumber`.



## Case 2: The Cryptic Function

**Prompt used:**
> "Explain this function step-by-step and suggest better variable names."

**AI suggested:**
- The function checks whether a word is a palindrome.
- Rename the function to `isPalindrome`.
- Rename the parameter to `word`.
- Store the reversed word in a variable before comparing.

**My insight:**
I learned that breaking a long line into smaller steps makes code much easier to understand. I also learned what `split()`, `reverse()`, and `join()` do together.

**Fix:**
- Renamed the function and parameter.
- Used `===` instead of `==`.


## Case 3: The Over-Engineered Mess

**Prompt used:**
> "Simplify this function in plain JavaScript. What's the intent?"

**AI suggested:**
- The function simply adds the two input numbers together.
- The variables `x` and `y` are unnecessary.
- The loop can be replaced with a single addition.

**My insight:**
I learned that sometimes code looks complicated but performs a very simple task. Breaking it down step by step helped me understand that the loop was just adding `b` to `a`.

**Fix:**
- Renamed the function to `addNumbers`.
- Removed unnecessary variables.
- Replaced the loop with `return a + b;`.