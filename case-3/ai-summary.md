### Case 3: The Over-Engineered Mess

🧠 **Prompt used:** "Simplify this function in plain JavaScript. What’s the intent?"
🤖 **AI suggested:** Identified that the loop simply increments `a` by 1, `b` times, while maintaining an unused `y` variable, and suggested replacing the entire function with `a + b`.
💡 **My Insight:** Always trace what variables actually affect the return value. The `y` variable was completely dead code, and the loop was just doing basic addition in $O(b)$ time instead of $O(1)$.
✅ **Fix:** Refactored into a clean one-line arrow function (`addNumbers`) that directly returns `a + b`.