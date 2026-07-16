### Case 3: The Over-Engineered Mess

:brain: **Prompt used:** "Simplify this function in plain JavaScript. What's the intent?"

:robot: **AI suggested:** The loop increments `x` by 1 exactly `b` times starting from `a`, which equals `a + b`. The variable `y` is decremented but never used, so it's dead code. The function can be replaced with `a + b`.

:bulb: **My Insight:** Tracing the loop by hand made it click — 10 lines of loop bookkeeping were just re-implementing the `+` operator. The `y` variable was a red herring designed to make it look more complicated than it was.

:white_check_mark: **Fix:** Collapsed the whole thing into a one-liner `const add = (a, b) => a + b`, removed the dead `y` code, and verified with tests that the outputs match the original.
