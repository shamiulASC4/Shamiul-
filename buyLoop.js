var prompt = require('prompt-sync')();

// Player starts with $100
// They're buying item at a store before they go on an adventure
// They have to spend as much money as possible (i. e spend all their money)

// PSEUDOCODE
// assign the player's money to $1000
//  create an array to store the items that the player bought 
//  until the player runs out of money:
//  ask them what they want to buy
// subtract that price from the money they have
// put item they bought in array 

var money = 1000;
var items = [];

// While the player has money
while (money > 99) {
    console.log(" You have $" + money + " left. A tent is $100. Used Yeezys are $500");
    var answer = prompt('Which item do you want to buy?');
    if (answer == "tent") {
        money = money - 100;
        items.push("tent");
        console.log(" You bought a tent!");
    } else if (answer == "Used Yeezys") {
        money = money - 500;
        items.push("Used Yeezys")
        console.log("You bought Used Yeezys!");
    } else {
        console.log(" I didn't understand your answer. Try again!");
    }
}
