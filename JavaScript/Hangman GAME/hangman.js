/* CREATING A HANGMAN GAME IN JAVASCRIPT  */

/*
var name = prompt("What's your name?");
console.log("Hello " + name);


var likesCat = confirm("Do you like cats?");
if (likeCats) {
    console.log("You're a cool cat!");
} else {
    console.log("Yeah, that's fine. You're still cool!");
}
alert("JavaScript is awesome!")*/

// 1. Choosing a Random Word 
var word = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];
var word = words[Math.floor(math.random() * word.length)];

// 2. Creating the Answer Array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

// 3. Coding the Game Loop
while (ramainingLetters > 0) {
    alert(answerArray.join(" "));

var guess = prompt("Guess a letter, or click Cancel to stop playing");
if (guess === null){
    break
}else if (guess.length !==1) {
    alert("Please enter a single letter.");
} else {
for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
        answerArray[j] = guess;
        reaminingLetters --;
    }
}
}
}
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);