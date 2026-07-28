AI Summary

Case 1
Prompt used: what does this code does, why is it broken ?
GPT: This function checks if an array contains an even number. It is broken because the variable i never increases, so if the first number is odd, the loop keeps checking the same number forever.
What i learned: A loop needs something that changes its condition. In the original code, i always stayed at 0, so the same array item was checked repeatedly.
fix: I changed it to a for loop, renamed the function and variables, and kept the original behavior: return true when an even number is found and false otherwise.


Case 2

Prompt used: what the function doing ?
GPT: The function reverses a string and compares it with the original string. It checks if the string is a palindrome.
What I learned: A function can work correctly and still be difficult to understand because of unclear names and formatting. Using q for both the function and the parameter made the code rly confusing.
Fix: I renamed the function to isPalindrome, renamed the parameter to word, stored the reversed string in a variable, and changed == to ===.


Case 3

Prompt used: can this be broken into a one line ? can u sujest one ?
GPT: Yes. The function is just adding b to a, so it can be simplified to return a + b;. The variable y is changed inside the loop but is never used in the returned result.
What I learned: Code can be much more complicated than necessary. I also learned that a variable can be changed several times and still have no effect on the final result.
Fix: I removed the loop and the unused variable and replaced the function with a direct addition using return firstNumber + secondNumber;.


REflection

The A.i is a very usefull tool that can do more than just give u the awnser, it can teach u how to do whatever you ask, in this case it was very helpful simplifying what the question asked, reading the one line and explaining it on case 2, and debugging.
i had to use it on case 2 because of the ".join('')==q".