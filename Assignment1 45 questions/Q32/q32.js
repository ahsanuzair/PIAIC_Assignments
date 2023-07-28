var current_users = ["eric", "admin", "uzair", "ahsan", "john"];
var new_users = ["mushaf", "awais", "uzair", "ahsan", "khalique"];
for (var i = 0; i < new_users.length; i++) {
    var avaialabe = true;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i] === current_users[j]) {
            console.log("the username: ".concat(new_users[i], " is unavailable, enter a new user name"));
            avaialabe = false;
        }
    }
    if (avaialabe) {
        console.log("the username: ".concat(new_users[i], " is available"));
    }
}
// function checkUniqueUsernames(currentUsers: string[], newUsers: string[]) {
//     for (let i = 0; i < newUsers.length; i++) {
//       let usernameTaken = false;
//       for (let j = 0; j < currentUsers.length; j++) {
//         if (newUsers[i] === currentUsers[j]) {
//           usernameTaken = true;
//           break;
//         }
//       }
//       if (usernameTaken) {
//         console.log(`The username '${newUsers[i]}' is already taken. Please enter a new username.`);
//       } else {
//         console.log(`The username '${newUsers[i]}' is available.`);
//       }
//     }
//   }
// Example usage
//   const currentUsers: string[] = ['user1', 'user2', 'user3', 'user4', 'user5'];
//   const newUsers: string[] = ['user6', 'user7', 'user2', 'user8', 'user9'];
//   checkUniqueUsernames(currentUsers, newUsers);
