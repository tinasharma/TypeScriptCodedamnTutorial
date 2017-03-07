var websites = (function () {
    function websites() {
    }
    return websites;
}());
var google = new websites();
google.url = "http://google.com";
google.facebookLikes = 12345;
console.log("The page: " + google.url + " has " + google.facebookLikes + " likes");
