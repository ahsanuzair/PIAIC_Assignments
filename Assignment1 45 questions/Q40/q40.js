var make_album = function (artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
};
var album1 = make_album("artist1", "title 1");
var album2 = make_album("artist2", "title 2", 11);
console.log(album1);
console.log(album2);
