## :card_index_dividers: Case 1: The Infinite Loop
- my insight: the loop needs i++
- Ai suggests it too
- from AI: what does the function do? --> This function is supposed to check whether an array contains at least one even number.
If it finds an even number, it returns true.
If there are no even numbers, it should return false.


## :card_index_dividers: Case 2: The Cryptic Function
//function q(q){return q.split('').reverse().join('')==q}
- my insight: it checks whether a string is the same in the reverse form./ from AI: It checks whether the input is a palindrome (a word that reads the same forwards and backwards).

## :card_index_dividers: Case 3: The Over-Engineered Mess
- my insight: the y part in the loop is unnessesary/ -from AI: Interestingly...

y = y - 1;

changes y, but y is never used again.

So these lines have no effect on the result. and it says we should change the variable names.
- this function gives us a+b
