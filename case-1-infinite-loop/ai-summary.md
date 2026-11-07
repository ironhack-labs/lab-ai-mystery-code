# Case 1: The Infinite Loop

**Prompt used:** “What is wrong with this JavaScript loop? Explain and fix it.”

**AI analysis:** The function is intended to return `true` when the array has
an even number. It correctly returns early when it finds one, but it never
increments `i` when the current value is odd. As a result, the same element is
checked forever.

**Fix:** Renamed the function and variables for clarity, added `index += 1`,
and documented the purpose of each step.

**My insight:** A loop needs a guaranteed state change on every non-terminating
path. Checking the condition alone is not enough to make progress.
