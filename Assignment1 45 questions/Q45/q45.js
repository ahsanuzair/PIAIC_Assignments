var info = function (manufacturer, model) {
    var req = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        req[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < req.length; i += 2) {
        var key = req[i];
        var value = req[i + 1];
        car[key] = value;
    }
    return car;
};
console.log(info("honda", "civic"));
console.log(info("toyota", "supra", "color", "white"));
console.log(info("mercedes", "benz", "class", "C", "color", "white", "optinal_feature", "sunroof"));
