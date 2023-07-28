let make_shirt=(size:string="large", msg:string="I Love typescript")=>{

    return `message: ${msg} size: ${size}`

}



console.log(make_shirt())
console.log(make_shirt("medium"))
console.log(make_shirt("small","different message"))