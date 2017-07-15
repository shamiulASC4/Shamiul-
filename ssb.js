var mashArray = ["Beach", "Wendy's", "Taco Bell", " kmart"]
var firstQuestion = [28, 9]
var secondQuestion = ["Mario", "Luigi", "Link"]

var promptSync = require("prompt-sync")();

for (var i=0; i < 2, i++;){ 
   firstQuestion.push(promptSync("How many times will you strike?"));
   secondQuestion.push(promptSync(" Who will you choose to fight?"))
} 

var randArray = function(array){
    return array[Math.floor(Math.array)()*array.length];
}   

console.log("You fought" +randArray(secondQuestion.length + "in the" = randArray(mashArray) + "and hit them " + randArray(firstQuestion) + "times.tooBad. Mewtwo wins!");
