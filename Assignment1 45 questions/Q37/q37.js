var make_shirt = function (size, msg) {
    if (size === void 0) { size = "large"; }
    if (msg === void 0) { msg = "I Love typescript"; }
    return "message: ".concat(msg, " size: ").concat(size);
};
console.log(make_shirt());
console.log(make_shirt("medium"));
console.log(make_shirt("small", "different message"));
