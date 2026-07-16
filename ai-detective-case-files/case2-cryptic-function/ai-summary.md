### Case 2: The Cryptic Function

:brain: **Prompt used:** "Explain this function step-by-step and suggest better variable names: `function q(q){return q.split('').reverse().join('')==q}`"

:robot: **AI suggested:** It's a palindrome checker. It splits the string into characters, reverses them, joins them back, and compares the result to the original. Suggested renaming the function to `isPalindrome` and the parameter to `text` or `str`, and using `===` instead of `==`.

:bulb: **My Insight:** The code wasn't complex — it was just *deliberately obscure* because the function and its argument shared the name `q`. Good naming did more for readability than any logic change.

:white_check_mark: **Fix:** Renamed to `isPalindrome(text)`, split the chained call onto commented lines, switched `==` to strict `===`, and added tests including edge cases (empty string).
