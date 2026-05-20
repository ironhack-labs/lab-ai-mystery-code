### Case 1: Infinite Loop

:brain: Prompt used: "Was stimmt mit dieser JS-Schleife nicht? Erkläre es kurz und fixe den Code."
:robot: AI suggested: Das i++ am Ende der Schleife hat gefehlt, weshalb der Index sich nie ändert.
:bulb: My Insight: Wenn man vergisst die Zählvariable zu erhöhen, prüft das Programm halt unendlich oft das erste Element. Voll der klassische Fehler eigentlich.

:white_check_mark: Fix: Habe i++ in die Schleife eingebaut, damit sie weitergeht.