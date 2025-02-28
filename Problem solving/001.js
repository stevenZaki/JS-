
/*  
FizzBuzz 

Problem: Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

# Hints:
1- Use a for loop to iterate through numbers 1 to 100.
2- Use the modulus operator % to check for multiples.

*/


for(x=1 ; x<=100 ; x++){
    console.log(x);
    if (x % 3 == 0 && x % 5 == 0){
        console.log("FIZZBUZZ " + x);
    }else if(x % 5 == 0){
        console.log("BUZZ " + x);
    }else if(x % 3 == 0){
        console.log("FIZZ " + x);}

    }