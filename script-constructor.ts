class websites {
    url:string;
    facebookLikes:number;

    constructor(url1:string,fbLikes:number) {
        this.url = url1; 
        this.facebookLikes = fbLikes;
    }
}

var google = new websites("http://google.com", 12345);

console.log("The page: " + google.url + " has " + google.facebookLikes + " likes");
