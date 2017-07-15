var Yeezy = [ "adidas", "yeezy boost 350", "turtledove", 9, 3200,]
var YeezyOject = {
    brand: "adidas",
    model: "yeezy",
    color: "Turtledove",
    size : 9,
    price : 3200
};

function Shoe(brand, model) {
    this.brand = brand;
    this.model = model;
}

var boosts = new Shoe("Adidas", "Yeezy Boost 350");
var stans = new Shoe("Stan Smiths");

function Superhero(heroName, realName, superpower) {
    this.heroName = heroName;
    this.realName = realName;
    this.superpower = superpower;
    this.talk = function() {
        console.log("Hi, I'm " + heroName);
    }
}

var superman = new Superhero("Superman", "Clark Kent", ["Flying", "Super Strength"]);
var spiderman = new Superhero(" Spiderman", "Peter Parker", ["Spidey Sense", "Web-Slinging", "wall climbing", " super strenght"]);