### Case 2: The Cryptic Function

🧠 **Prompt used:** "Explain this function step-by-step and suggest better variable names."
🤖 **AI suggested:** Explained that `.split('').reverse().join('')` reverses a string to check for palindromes, and recommended descriptive names (`isPalindrome` and `text`) plus strict equality (`===`).
💡 **My Insight:** Naming both the function and its parameter `q` makes the code unreadable, and single-line chaining hides the intent. Storing `reversedText` in a variable makes the logic self-explanatory.
✅ **Fix:** Renamed the function and parameter, stored the reversed string in a clear constant, switched `==` to `===`, and added comments.