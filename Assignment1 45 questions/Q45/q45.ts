let info = (manufacturer:string, model:string ,...req:string[])=>
{
    let car = {
        manufacturer:manufacturer,
        model:model
    }

    for (let i = 0; i < req.length; i += 2) {
        const key = req[i];
        const value = req[i + 1];
        car[key] = value;
    }

    return car
}

console.log(info("honda","civic"))
console.log(info("toyota","supra","color","white"))
console.log(info("mercedes","benz","class","C","color","white","optinal_feature","sunroof"))
