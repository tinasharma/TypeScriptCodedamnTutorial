var websites = (function () {
    function websites(url1, fbLikes) {
        this.url = url1;
        this.facebookLikes = fbLikes;
    }
    websites.prototype.likesInK = function () {
        return (this.facebookLikes / 1000) + 'k';
    };
    return websites;
}());
var google = new websites("http://google.com", 12345);
console.log("The page: " + google.url + " has " + google.likesInK() + " likes");
