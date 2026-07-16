### Case 1: The Infinite Loop

:brain: **Prompt used:** "What's wrong with this JS while loop and why does it never end? Explain and fix it."

:robot: **AI suggested:** The counter `i` is never incremented inside the loop, so `i < arr.length` never becomes false. Add `i++` (or use a `for` loop) so the index advances.

:bulb: **My Insight:** The function's real *intent* is "does this array contain an even number?". The original could only ever finish if the very first element was even; any odd first element caused an infinite hang. Once I understood the intent, the clean fix was obvious.

:white_check_mark: **Fix:** Rewrote it as a `for` loop that always increments `i`, renamed it to `hasEvenNumber`, added plain-English comments, and included a one-line `Array.prototype.some` version plus quick tests.
