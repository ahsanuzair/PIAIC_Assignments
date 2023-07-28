let magicians:string[]=["mag1", "mag2","mag3"]

let show_magician = (magician_array)=>
{
    for(let magician of magician_array)
    {
        console.log(magician)
    }
}



let make_great=(magicians)=>
{
    for(let i in magicians)
    {
        magicians[i]=`the great ${magicians[i]}`
    }

    
}
make_great(magicians)
show_magician(magicians)





