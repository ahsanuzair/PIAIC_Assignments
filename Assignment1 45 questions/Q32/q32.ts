let current_users:string[]=["eric","admin","uzair","ahsan","john"]

let new_users:string[]=["mushaf","awais","uzair","ahsan","khalique"]



for(let i =0; i < new_users.length; i++)
{
    let avaialabe:boolean=true;

    for(let j =0; j<current_users.length; j++)
    {
        if(new_users[i]===current_users[j])
        {
            console.log(`the username: ${new_users[i]} is unavailable, enter a new user name`)

            avaialabe=false;
            break
        }
    }

    if(avaialabe)
    {
        console.log(`the username: ${new_users[i]} is available`)
    }
}