### Case 1: Infinite Loop

🧠 Prompt used: "Let's start with the first one, help me understand this code"
🤖 AI suggested: It didn't give the fix directly. It reminded me that a for loop has three parts (start, condition, increment) whereas a while loop only has the condition, then had me trace the array [1, 3, 5] by hand.
💡 My Insight: By tracing the execution step by step, I saw that `i` stayed at 0 — the increment was missing. The condition `i < arr.length` therefore stays true forever and the loop never ends. I also noticed the bug is invisible with [2, 4, 6]: the `return true` exits on the very first pass.

✅ Fix: Added `i++` after the `if`, inside the `while`. The placement matters: if it were before the `if`, the first element of the array would be skipped.

### Case 2: The Cryptic Function

🧠 Prompt used: Does split actually serve any purpose here?
🤖 AI suggested: The AI didn't rewrite the code for me. It broke the chain into its three steps and asked me to trace "radar" through them myself. When I questioned whether split was necessary, it showed me that "radar".reverse() throws a TypeError, because reverse() only exists on arrays — which is why the string has to be split first and joined back afterwards. It also pointed out that there was no actual bug here: the fix was about naming, formatting and comments, plus switching == to === as good practice.
💡 My Insight: I traced "radar" by hand through the chain and saw it produced the same word reversed, so the function checks whether a string is a palindrome. I also understood why split is necessary: reverse() is an array method, not a string method — so the string has to be converted to an array first, then joined back.

✅ Fix: No bug here — only renaming, formatting and comments. Plus switching == to ===.

### Case 3: The Over-Engineered Mess

🧠 Prompt used: Write me the console logs to test this function." Instead of asking what the code did, I asked for a way to observe it myself.
🤖 AI suggested: The AI didn't tell me what the function did. When I asked for test cases, it gave me a set of calls covering both normal and edge inputs — including b = 0 and a negative b — and let me spot the pattern myself. Once I identified the addition, it confirmed it, pointed out that y was dead code, and highlighted that the negative-b case behaves differently between the original and the one-line version.
💡 My Insight: Seeing (5, 3) → 8 and (2, 7) → 9, I identified it as a simple addition. The loop just adds 1 to x exactly b times. I also noticed that y is dead code — it gets decremented on every iteration but is never used or returned.

✅ Fix: return a + b; — one line.