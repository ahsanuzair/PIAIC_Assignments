var car = 'subaru';
var age = 25;
var isValid = true;
var fruit = 'apple';
var num1 = 10;
var num2 = 5;
var fruitsArray = ['apple', 'banana', 'orange'];
var compatibleFruitsArray = fruitsArray;
// Tests for equality and inequality with strings
console.log("Is car equal to 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
console.log("Is car not equal to 'honda'? I predict True.");
console.log(car != 'honda'); // True
// Tests using the lower case function
console.log("Is fruit in lowercase equal to 'apple'? I predict True.");
console.log(fruit.toLowerCase() == 'apple'); // True
console.log("Is fruit in lowercase not equal to 'orange'? I predict True.");
console.log(fruit.toLowerCase() != 'orange'); // True
// Numerical tests
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 === num2); // False
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 !== num2); // True
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2); // True
console.log("Is num1 less than num2? I predict False.");
console.log(num1 < num2); // False
console.log("Is num1 greater than or equal to num2? I predict True.");
console.log(num1 >= num2); // True
console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2); // False
// Tests using "and" and "or" operators
console.log("Is car equal to 'subaru' and isValid is true? I predict True.");
console.log(car === 'subaru' && isValid); // True
console.log("Is car equal to 'honda' or fruit is equal to 'orange'? I predict True.");
console.log(car === 'honda' || fruit === 'orange'); // True
// Test whether an item is in an array
console.log("Is 'apple' in the fruitsArray? I predict True.");
console.log(fruitsArray.includes('apple')); // True
console.log("Is 'grape' in the fruitsArray? I predict False.");
console.log(compatibleFruitsArray.includes('grape')); // False
// Test whether an item is not in an array
console.log("Is 'banana' not in the fruitsArray? I predict False.");
console.log(!compatibleFruitsArray.includes('banana')); // False
console.log("Is 'kiwi' not in the fruitsArray? I predict True.");
console.log(!compatibleFruitsArray.includes('kiwi')); // True
