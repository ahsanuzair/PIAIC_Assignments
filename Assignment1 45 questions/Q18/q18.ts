let arr: string[] = ["lahore","Islamabad","Attock","Karachi","Faisalabad"];

console.log("\narray in original order");
console.log(arr);

console.log("\narray in sorted order");
let alphabetical =  [...arr].sort();
console.log(alphabetical);

console.log("\narray in original order");
console.log(arr);

console.log("\narray in descending order");
let reverseOrder =  [...arr].sort().reverse();
console.log(reverseOrder);

console.log("\narray in original order");
console.log(arr);

console.log("\narray in reverse order");
arr.reverse();
console.log(arr);

console.log("\narray in original order");
arr.reverse();
console.log(arr);

console.log("\narray in alphabetical order order");
arr.sort();
console.log(arr);

console.log("\narray in reverse alphabetical order order");
arr.sort().reverse();
console.log(arr);