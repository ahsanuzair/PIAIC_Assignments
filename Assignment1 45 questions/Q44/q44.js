function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order summary:");
    console.log("Bread,".concat(items.join()));
}
orderSandwich("Cheese", "Tomato", "Lettuce");
orderSandwich("Ham", "Mustard");
orderSandwich("Turkey", "Cheese", "Mayonnaise", "Pickles");
