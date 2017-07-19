var sentence = "Hello, World";
var typed = "";

function setup(){
    createCanvas(300,300);
    background(225);
    
    fill("white");
    textSize(18);
    text("Please type the sentence below", 50, 50);
    text(sentence, 50, 100);
}
function keyTyped(){
    type = typed + key;
    if(type ==sentence){
        console.log("Good Job!");
    } else{
        console.log ("Try Again");    } 
}

