"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var subjects = ["pf", "os", "calculus", "tafl"];
var total = [60, 80, 50, 60];
var marks = [];
var input;
for (var i = 0; i < subjects.length; i++) {
    marks[i] = parseInt(prompt("enter marks of ".concat(subjects[i], ": out of ").concat(total[i], ": ")));
}
var percentage = 0;
var obtainedMarks = 0;
var totalMarks = 0;
var calculate = function () {
    for (var i in marks) {
        obtainedMarks += marks[i];
        totalMarks += total[i];
        percentage = (obtainedMarks / totalMarks) * 100;
    }
    return percentage;
};
var grade;
var grading = function () {
    calculate();
    if (percentage <= 100 && percentage >= 90) {
        grade = "A";
    }
    else if (percentage < 90 && percentage >= 80) {
        grade = "B";
    }
    else if (percentage < 80 && percentage >= 70) {
        grade = "C";
    }
    else if (percentage < 70 && percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    console.log("the total percentage is: ".concat(percentage, " and the corresponding grade is: ").concat(grade));
};
grading();
