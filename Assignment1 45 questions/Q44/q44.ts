function orderSandwich(...items: string[]) {
  console.log("Sandwich order summary:");
  console.log(`Bread,${items.join()}`);
}

orderSandwich("Cheese", "Tomato", "Lettuce");
orderSandwich("Ham", "Mustard");
orderSandwich("Turkey", "Cheese", "Mayonnaise", "Pickles");
