var magicians = ["mag1", "mag2", "mag3"];
var show_magician = function (magician_array) {
    for (var _i = 0, magician_array_1 = magician_array; _i < magician_array_1.length; _i++) {
        var magician = magician_array_1[_i];
        console.log(magician);
    }
};
var make_great = function (magicians) {
    for (var i in magicians) {
        magicians[i] = "the great ".concat(magicians[i]);
    }
};
make_great(magicians);
show_magician(magicians);
