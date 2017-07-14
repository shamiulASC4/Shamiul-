function randLetter(){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet [rand(alphabet.length)];
   
}

function randWord(){
    var word = "";
    for (var i= 0; i < 5; i++) {
        //Pick a letter
        word = word + randLetter();
    }
    return word;
}

function randSentence(){
    var sentence = "";
    //use a loop to pick 5 random words
    for( var i = 0; i < 5; i++){
        //Pick a word
        sentence = sentence + randWord() + " ";
     }
    return sentence;
}
