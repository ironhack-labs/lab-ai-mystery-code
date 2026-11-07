# Case 3: The Over-Engineered Mess

**Prompt used:** “Simplify this function in plain JavaScript. What is its
intent?”

**AI analysis:** `x` starts at `a` and is incremented `b` times, so the final
value is `a + b`. `y` is decremented but never read, which makes it dead code.
The loop can be replaced by a direct addition.

**Fix:** Replaced the loop with the one-line arrow function `addNumbers`, used
descriptive parameter names, and documented the algebraic equivalence.

**My insight:** Tracing how each variable changes and checking which values are
actually returned can reveal a much simpler implementation.
