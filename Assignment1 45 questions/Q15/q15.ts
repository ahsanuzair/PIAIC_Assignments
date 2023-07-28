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