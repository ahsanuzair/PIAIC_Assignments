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
// Attempt to access an element at an invalid index
var invalidIndex = 10;
console.log("Trying to access the element at index ".concat(invalidIndex, ":"));
items.forEach(function (item) {
    console.log("Name: ".concat(item.name));
    console.log("Location: ".concat(item.location));
});
console.log("index error: " + items[invalidIndex]);
