var playerChoice = "Rock";

var compChoices = ["Rock", "Paper", "Scissors"]; 
var compChoice = compChoices[Math.floor(Math.random()*3)];
//Tie
if (CompChoice == paperChoice){
console.log("It's a tie..");
} 
//Computer= Rock and Player= Rock
else if ( CompChoice == "Paper" && playerChoice == "Rock" ){
    console.log(" You Lose, paper beats rock ");
}
//Computer Scissors and Player= Paper
else if (compChoice == "Scissors" && playerChoice == "Paper"){
    console.log(" You Lose, scissors beats papers");
}
//Computer= Rock and Player = Scissors
else if ( compChoice == "Rock") && playerChoice == "Scissors"){
    console.log( "You Lose, Rock beats Scissors");
}
//Computer = Rock and Player = Paper
else if ( compChoice == "Rock") && playerChoice == "Paper"){
    console.log( "You Win, Paper beats Rock");
}
//Computer = Paper and Player= Scissors
else if ( compChoice == "Paper") && playerChoice == "Scissors"){
    console.log( "You Win, Scissors beats Paper");
}
//Computer = Scissors and Player = Rock
else if ( compChoice == "Scissors") && playerChoice == "Rock"){
    console.log( "You Win, Rock beats scissors");
}