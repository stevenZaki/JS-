/*

2. Even or Odd
Problem: Ask the user to input a number, and then determine whether the number is even or odd. Print "Even" if the number is even and "Odd" if the number is odd.
Hints:
Use prompt() to get user input.
Use the modulus operator % to check if a number is even or odd.

*/

var x = prompt("Enter a number!");

if (x % 2 == 0){
    console.log("This number is even");
}else {
    console.log("This number is odd");
}
