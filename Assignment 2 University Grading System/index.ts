import * as promptSync from "prompt-sync"

let prompt=promptSync()

let subjects:string[]=["pf","os","calculus","tafl"]
let total:number[]=[60,80,50,60]


let marks:number[]=[];
let input:number;
for(let i =0;i<subjects.length;i++)
{
    
    marks[i]=parseInt(prompt(`enter marks of ${subjects[i]}: out of ${total[i]}: `))
}

let percentage:number=0
let obtainedMarks:number=0
let totalMarks:number=0

let calculate=()=>
{
    for(let i in marks)
    {
        obtainedMarks+=marks[i]
        totalMarks+=total[i]
        percentage = (obtainedMarks/totalMarks)*100
    }

    return percentage
}

let grade:string;
let grading=()=>
{
    calculate()

    if(percentage<=100 && percentage >=90)
    {
        grade=`A`
    }

    else if(percentage<90 && percentage >=80)
    {
        grade=`B`
    }

    else if(percentage<80 && percentage >=70)
    {
        grade=`C`
    }

    else if(percentage<70 && percentage >=50)
    {
        grade=`D`
    }

    else
    {
        grade=`F`
    }

    console.log(`the total percentage is: ${percentage} and the corresponding grade is: ${grade}`)
    
}

grading()