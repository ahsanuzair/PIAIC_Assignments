let describe_city= (city:string, country:string="Pakistan") =>
{
    return `${city} is in ${country}`
}

console.log(describe_city("karachi"))
console.log(describe_city("Islamabad"))
console.log(describe_city("London", "UK"))