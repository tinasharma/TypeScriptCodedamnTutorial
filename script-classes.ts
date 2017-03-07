class websites {
    url:string;
    facebookLikes:number;
}

var google = new websites();

google.url = "http://google.com";
google.facebookLikes = 12345;

console.log("The page: " + google.url + " has " + google.facebookLikes + " likes");
