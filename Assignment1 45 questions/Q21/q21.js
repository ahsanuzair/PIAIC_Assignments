// Create an array of objects representing different items
var items = [
    {
        name: "Mount Everest",
        location: "Nepal",
    },
    {
        name: "Amazon River",
        location: "South America",
    },
    {
        name: "New York City",
        location: "USA",
    }
];
// Print the list of items
console.log("List of items:");
items.forEach(function (item) {
    console.log("Name: ".concat(item.name));
    console.log("Location: ".concat(item.location));
    console.log("------------");
});
