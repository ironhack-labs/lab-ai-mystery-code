


# Prompt 

In a short sentence tell me why this code fails? 

function q(q){
    return q.split('').reverse().join('')==q
}


# Suggestion

Altough function technically works, the naming is not descriptive enough. 
Change function name to: is palindrome and str points clearly to taking a string as parameter. 

function isPalindrome(str)

# Reflection

Even if the code works, make it easier to read for collaborative purposes. 