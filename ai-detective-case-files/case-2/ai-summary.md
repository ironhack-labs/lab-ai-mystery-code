### Case 2: The Cryptic Function

#### 🧠 Prompt(s) Used:
- "Explain this function step-by-step: function q(q){return q.split('').reverse().join('')==q}"
- "What does this function check for? Suggest better variable names."
- "Why should I use === instead of == here?"

#### 🤖 AI Response Summary:
- The function checks if a string is a palindrome
- `split('')` breaks string into character array
- `reverse()` flips the array order
- `join('')` converts array back to string
- `== q` compares reversed string with original
- AI suggested using strict equality (===) and descriptive names

#### 💡 My Understanding:
- A palindrome reads the same forwards and backwards (e.g., "racecar", "level")
- The cryptic name `q` makes the code unreadable
- Using `==` instead of `===` can cause unexpected type coercion bugs
- Breaking the one-liner into steps makes it easier to debug and understand

#### ✅ The Fix:
- Renamed function from `q` to `isPalindrome` (describes what it does)
- Renamed parameter from `q` to `text` (clearer purpose)
- Changed `==` to `===` (strict equality, safer comparison)
- Broke code into multiple lines with comments explaining each step
- Added JSDoc documentation for better code documentation
- Included test examples to verify the function works

#### 🎯 What I Learned:
- Minified/cryptic code is hard to maintain and debug
- Descriptive names make code self-documenting
- Always use strict equality (===) to avoid type coercion issues
- Comments should explain WHY, not just WHAT the code does
- Breaking complex one-liners into steps improves readability