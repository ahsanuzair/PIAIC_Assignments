let mylist: string[]= ["ali","awais","mushaf"];

let notAttending = "awais";

for(let i = 0; i<mylist.length; i++)
{
    console.log("Hello "+mylist[i]+"! you are invited to dinner");
}

console.log("As, "+ notAttending +" is unable to attend, so here is the updated list: ");

for(let i = 0; i<mylist.length; i++)
{
if(mylist[i] == notAttending)
    {
        mylist[i]="abdul";
    }
    console.log("Hello "+mylist[i]+"! you are invited to dinner");
}

console.log("We found a bigger table, so we are inviting some new guests: ");

let midd = Math.round((mylist.length)/2);

mylist.push("khalique");
mylist[midd]="abdullah";
mylist.unshift("uzair");

for(let i = 0; i<mylist.length; i++)
{
    console.log("Hello "+mylist[i]+"! you are invited to dinner");
}
