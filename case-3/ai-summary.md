### Case 3: The Over-Engineered Mess

**Prompt used:**  
“Simplify this function in plain JavaScript. What’s the intent?”

**AI suggested:**  
The loop was effectively adding `b` to `a`, one step at a time. The `y` variable was unnecessary because it didn't affect the final result. The whole function could be replaced with a simple `return a + b`.

**My Insight:**  
Sometimes code performs a very simple operation in a very complex way. Understanding what changes in each loop iteration helped me see that the function was just doing a basic addition.

**Fix Applied:**  
I replaced `complicatedCalc` with a clearer function called `add` that directly returns `a + b`, added comments in plain English, and wrote sample tests to confirm the behavior.
