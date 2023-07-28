var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["mag1", "mag2", "mag3"];
var copy = __spreadArray([], magicians, true);
var show_magician = function (magician_array) {
    for (var _i = 0, magician_array_1 = magician_array; _i < magician_array_1.length; _i++) {
        var magician = magician_array_1[_i];
        console.log(magician);
    }
};
var make_great = function (copy) {
    for (var i in copy) {
        copy[i] = "the great ".concat(copy[i]);
    }
    for (var _i = 0, copy_1 = copy; _i < copy_1.length; _i++) {
        var j = copy_1[_i];
        console.log(j);
    }
};
console.log("copy of the array");
make_great(copy);
console.log("original array");
show_magician(magicians);
