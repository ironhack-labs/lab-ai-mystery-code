### Case 3: The Over-Engineered Mess

:brain: Prompt used: "Vereinfache diese Funktion in einfachem JavaScript. Was ist die eigentliche Absicht des Codes?"
:robot: AI suggested: Der Code läuft b-mal durch und rechnet jedes Mal +1 auf den Wert von a drauf. Das ist mathematisch gesehen einfach nur a + b.
:bulb: My Insight: Manchmal baut man einen riesigen Loop für etwas, das man in einer einzigen Zeile mit einem Plus-Zeichen lösen kann. Weniger Code ist hier definitiv besser.

:white_check_mark: Fix: Den ganzen For-Loop gelöscht und durch ein einfaches return a + b ersetzt.