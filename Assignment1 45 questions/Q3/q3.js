"use strict";
let myname = "uzair";
let newstring = "my naMe is uzair ahsan and this q3 of panaverse course";
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
function toTtileCase(msg) {
    let step1 = msg.split(' ');
    let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
    let step3 = step2.join(' ');
    console.log(step3);
}
toTtileCase(newstring);
