let magicians:string[]=["mag1", "mag2","mag3"]

let copy:string[]=[...magicians]

let show_magician = (magician_array)=>
{
    for(let magician of magician_array)
    {
        console.log(magician)
    }

    
}



let make_great=(copy)=>
{
    for(let i in copy)
    {
    
        copy[i]=`the great ${copy[i]}`
    }

    for(let j of copy)
    {
        console.log(j)
    }

    
}
console.log("copy of the array")
make_great(copy)
console.log("original array")

show_magician(magicians)

