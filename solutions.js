// q1 1. 3 Define three variables using let, 
// assigning them to a string, a boolean, and a number respectively.

let myString = "hi";
let myBoolean = true;
let myNumber = 78;

// 2. 10 Write five different comparisons between two values that produce a boolean 
// result, and then add a comment that gives the result and explains your answer 
// (e.g., 5 > 3 / true; 5 is greater than 3). You must use at least three different 
// comparison operators, and include at least one comparison using the strict 
// equality operator (===).

5 > 6; // answer is false because 5 is less than 6
3 < 2; // answer is true 3 is grater than 2
5 === 5; // answer is true as 5 eqauls strictly only 5 number 
// alert(7 !== 3); // answer is true becasue 7 does not equal 3 
4 <= 4; // answer true, 4 is less than or equal to 4

// q3 3. 2 Output the equation "5 * 4 = 20" by calculating the answer 
// (20) and using a template literal for the result.

// alert(`5 * 4 = ${5 * 4}`);

// 4. 2 Provide two different ways of converting a number to a string.

let num = 86
let tostring = number.toString
alert(nums);

let num2 = 56;
let lit = `num2`;

let num3 = 45
let strings = String(num3); 

// 5. 3 Write a boolean expression that uses 
// all three of the logical operators (AND, OR, NOT).

(true && false) || !false;

// 6. 5 Write a function that takes a single number as a parameter and returns a 
// boolean depending on whether the input number is positive (true) or negative 
// zero (false).

function postive (num) {
    return num > 0;
}

// 7. 10 Write two loops, one for loop, and one while loop which each output 
// the numbers 1 through 10 inclusive.

for (let i = 1; i <= 10; 1++)
{
    console.log(i)
}

let j =1
while (j < 10)
{
    console.log(j);
    j++;
}

// 8. 5 Prompt the user for a number, then using a single if statement, 
// output a message if the input number is either 5, or 13, or is divisible by 3.

let message = number(prompt("please give number"));
if (message === 5 || message === 13 || message %3 ===0)
{
    "correct number";
}
else {
    "not chosen number";
}

// 9. 10 Prompt the user for their favourite season. You can assume they will only
// provide one of "summer", "winter", "autumn", and "spring". Use a chained 
// if .. else if statement to output a different message depending on their 
// selection. Now write an alternative way of solving this problem using a 
// switch statement instead of the if .. else if chain

let season = prompt("favourite season please");
if (season === "summer")
{
 console.log("Summer is great for the beach!");
}
else if (season === "winter") {
 console.log("Winter is perfect for skiing!");
}
else if (season === "autumn") {
     console.log("Autumn has beautiful colors!");
}
else if (season === "spring") {
     console.log("Spring brings flowers!");
}

// switch case way


switch (season) {
    case "summer":
        console.log("Summer is great for the beach!");
        break;
    case "winter":
        console.log("Winter is perfect for skiing!");
        break;
    case "autumn":
        console.log("Autumn has beautiful colors!");
        break;
    case "spring":
        console.log("Spring brings flowers!");
        break;
}
/*
switch (season) {
    case "summer":
        console.log()
        break;
    case "winter":
        console.log()
        break;
    case "autumn":
        console.log()
        break;
    case "spring":
        console.log()
        break;  
      }  
     */             
