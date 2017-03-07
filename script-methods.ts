class websites {
    url:string;
    facebookLikes:number;

    constructor(url1:string,fbLikes:number) {
        this.url = url1; 
        this.facebookLikes = fbLikes;
    }

    likesInK():string {
        return (this.facebookLikes/1000) + 'k';
    }
}

var google = new websites("http://google.com", 12345);

console.log("The page: " + google.url + " has " + google.likesInK() + " likes");
