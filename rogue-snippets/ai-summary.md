### Bonus: Rogue Snippet Hunt (Redundant Boolean Check)

🧠 **Prompt used:** "How can I simplify redundant if/else boolean checks in JavaScript?"
🤖 **AI suggested:** Pointed out that explicitly checking `=== true` and `=== false` before falling back to `Boolean()` is redundant, as `Boolean(isActive)` handles all cases directly.
💡 **My Insight:** Beginners and AI models often write defensive `if/else` blocks when returning a boolean, forgetting that expressions and type constructors like `Boolean()` already evaluate to `true` or `false`.
✅ **Fix:** Simplified the 9-line function into a single-line arrow function using `Boolean()`.