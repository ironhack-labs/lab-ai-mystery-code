### Bonus: Rogue Snippet Hunt

:brain: Prompt used: “What does this JavaScript one-liner do, and how can I explain it more clearly?”
:robot: AI suggested: refactor the condition into named steps and add comments for readability.
:bulb: My Insight: The original code keeps truthy even values and squares them. Its truthiness check also excludes values such as `null`, `false`, and empty strings, which was easy to miss in a compact form.

:white_check_mark: Fix: Broke the process into readable steps and documented the intent clearly.
