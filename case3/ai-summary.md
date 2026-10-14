### Case 3: Over-Engineered Mess

:brain: Prompt used: "Simplify this function in plain JavaScript. What’s the intent?"
:robot: AI suggested: Reduce the logic to a direct addition because the loop was just incrementing `x` repeatedly.
:bulb: My Insight: The real behavior was adding `b` to `a`, but the original version hid that with a distracting loop and unused variable `y`. I checked whether the code could be simplified further and reduced it to the clearest possible version.

:white_check_mark: Refactor: Reduced the function and refactored it into a cleaner one-line version: `const addNumbers = (a, b) => a + b;`
