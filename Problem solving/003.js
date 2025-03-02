/*
3. Factorial Calculation
Problem: Ask the user to input a non-negative integer, and then calculate the factorial of that number. The factorial of a number n is the product of all positive integers less than or equal to n. For example, the factorial of 5 is 5! = 5 * 4 * 3 * 2 * 1 = 120.
Hints:
Use a loop (either for or while) to multiply numbers.
Consider using a variable to accumulate the product.

*/


function multiplyAll(x){

    var myArray= []

    for ( y = x ; y>=1 ; y-- ){
        myArray.push(y)
        
    }
    console.log(myArray)
   
}

multiplyAll(6)