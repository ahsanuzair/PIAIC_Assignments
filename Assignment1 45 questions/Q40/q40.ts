let make_album=(artist:string, title:string, tracks?:number)=>
{
    const album={
        artist:artist,
        title:title
    }

    if (tracks!==undefined)
    {
        album["tracks"]=tracks
    }

    return album
}

let album1 = make_album("artist1","title 1")
let album2 = make_album("artist2","title 2",11)

console.log(album1)
console.log(album2)