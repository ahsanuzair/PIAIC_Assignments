// Define an interface to describe the structure of the objects
interface Item {
  name: string;
  location: string;
}

// Create an array of objects representing different items
const items: Item[] = [
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
const invalidIndex = 4;
console.log(`Trying to access the element at index ${invalidIndex}:`);

items.forEach((item)=>
{
  
  console.log(`Name: ${item.name}`);
  console.log(`Location: ${item.location}`);
})

//console.log(`index error: ` + items[invalidIndex]);

