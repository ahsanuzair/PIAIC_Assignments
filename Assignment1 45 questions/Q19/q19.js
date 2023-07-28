"use strict";
let mylist = ["ali", "awais", "mushaf"];
let notAttending = "awais";
for (let i = 0; i < mylist.length; i++) {
    console.log("Hello " + mylist[i] + "! you are invited to dinner");
}
console.log("As, " + notAttending + " is unable to attend, so here is the updated list: ");
for (let i = 0; i < mylist.length; i++) {
    if (mylist[i] == notAttending) {
        mylist[i] = "abdul";
    }
    console.log("Hello " + mylist[i] + "! you are invited to dinner");
}
console.log("We found a bigger table, so we are inviting some new guests: ");
let midd = Math.round((mylist.length) / 2);
mylist.push("khalique");
mylist.splice(midd, 0, "abdullah");
mylist.unshift("uzair");
for (let i = 0; i < mylist.length; i++) {
    console.log("Hello " + mylist[i] + "! you are invited to dinner");
}
console.log("I can invite only two persons ");
for (let i = mylist.length - 1; i > 1; i--) {
    console.log("sorry " + mylist[i] + " you are not invited");
    mylist.pop();
}
let count = 0;
console.log("\n the invited persons are: \n");
for (let i = 0; i < mylist.length; i++) {
    console.log(mylist[i] + " you are invited");
    count++;
}
mylist.length = 0;
console.log(mylist);
console.log(`the number of invited persons are: ${count}`);
