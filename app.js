'use strict';
let username = prompt('Greetings, user. Do you have a preferred name?');
alert('Welcome: '+ username + '.');
console.log("User Information Collected.");

/*
// QUESTION ONE: WHERE DOES HE LIVE?
let home = prompt('Does Ken live in Delaware?');
let answer1 = home.toUpperCase();
if (answer1 === "YES" || answer1 === "Y") {
    //console.log("Oh, that's not right...")
    alert("Oh, that's not right...");
} else if (answer1 === "NO" || answer1 === "N") {
    //console.log("Yes! That's right!");
    alert("Yes! That's right!");
} else {   
    //console.log("Please answer with either a \'Yes\' or a \'No\'.");
    alert("Please answer with either a \'Yes\' or a \'No\'.");
}
//alert('I see. So, '+ home + '... (continues scribbling)');
console.log("Question One Information Collected.");
*/


/*
// QUESTION TWO: WHAT IS HIS DOG\'S NAME?
let dog = prompt('Is Ken\'s dog named Moxie?');
let answer2 = dog.toUpperCase();
if (answer2 === "YES" || answer2 === "Y") {
    //console.log("Yes! That's right!");
    alert("Yes! That's right!");
} else if (answer2 === "NO" || answer2 === "N") {
    //console.log("Oh, that's not right...")
    alert("Oh, that's not right...");
} else {   
    //console.log("Please answer with either a \'Yes\' or a \'No\'.");
    alert("Please answer with either a \'Yes\' or a \'No\'.");
}
//alert('Oh, ' + dog + ', really? ... (continues scribbling)');
console.log("Question Two Information Collected.");
*/

/*
// WHAT IS HIS FAVORITE PROGRAMMING LANGUAGE? 
let language = prompt('Is Ken\'s favorite programming language COBOL?');
let answer3 = language.toUpperCase();
if (answer3 === "YES" || answer3 === "Y") {
    //console.log("Oh, that's not right...")
    alert("Oh, that's not right...");
} else if (answer3 === "NO" || answer3 === "N") {
    //console.log("Yes! That's right!");
    alert("Yes! That's right!");
} else {   
    //console.log("Please answer with either a \'Yes\' or a \'No\'.");
    alert("Please answer with either a \'Yes\' or a \'No\'.");
}
//alert('Hmm... ' + language + ' ... (continues scribbling)');
console.log("Question Three Information Collected.");
*/

/*
// WHAT IS HIS FAVORITE PROGRAMMING BEVEREDGE?
let drink = prompt('Is Ken\'s favorite programming drink Everclear?');
let answer4 = drink.toUpperCase()
if (answer4 === "YES" || answer4 === "Y") {
    //console.log("Oh, that's not right...")
    alert("Oh, that's not right...");
} else if (answer4 === "NO" || answer4 === "N") {
    //console.log("Yes! That's right!");
    alert("Yes! That's right!");
} else {   
    //console.log("Please answer with either a \'Yes\' or a \'No\'.");
    alert("Please answer with either a \'Yes\' or a \'No\'.");
}
alert('We agree, then? '+ drink +" works for me...");
console.log("Question Four Information Collected.");
*/

/*
// WHAT IS HIS FAVORITE PROGRAMMING SNACK?
let snack = prompt('Is Ken\'s favorite programming snack Cheez-its?');
let answer5 = snack.toUpperCase();
if (answer5 === "YES" || answer5 === "Y") {
    //console.log("Yes! That's right!");
    alert("Yes! That's right!");
} else if (answer5 === "NO" || answer5 === "N") {
    //console.log("Oh, that's not right...")
    alert("Oh, that's not right...");
} else {   
    //console.log("Please answer with either a \'Yes\' or a \'No\'.");
   alert("Please answer with either a \'Yes\' or a \'No\'.");
}
alert('So, thoughts on snack material... '+ snack + ', huh. Did not expect that. (continues scribbling)');
console.log("Question Five Information Collected.");
*/

/*
// NUMBER GUESSING GAME
alert('Let\'s play a number guessing game. Pick a number and I\'ll let you know if you are close, you will have 4 guesses.');
let correctNum = 7
let numGuessRemain = 4

while (numGuessRemain > 0) {
    let numGuess = prompt('Pick a number:');
    if (numGuess == correctNum) {
        alert("You guessed right!");
        numGuessRemain = 0
        break
    } else if (numGuess > correctNum) {
        alert("That's too high...");
    } else if (numGuess < correctNum) {
        alert("That's too low...");
    } else {   
        //console.log("Please answer with either a \'Yes\' or a \'No\'.");
        alert("Please answer with a number.");
    }
    numGuessRemain--
    alert("You have: " + numGuessRemain + " guesses remaining.")
}
alert("Thank you for playing.")
console.log("Question Six Information Collected.");
*/


// MULTIPLE CORRECT ANSWERS
/*
alert('All right. Final Question: Can you guess the pokemon I had when I faced the Elite Four in Pokemon Blue? You will have 6 guesses.');

let sixPokemon = ['Charizard', 'Polywrath', 'Alakazam', 'Victrebell', 'Raichu', 'Onyx']
//let pokeGuess = prompt('Guess a pokemon:');
let pokeGuessRemain = 6
let correctPokeGuess = 0

while (pokeGuessRemain > 0) {
    let pokeGuess = prompt('Guess a pokemon:');
    let teamCheck = 0; 
    while (teamCheck < 6) {
        if (pokeGuess == sixPokemon[teamCheck]) {
            alert("You guessed right!");
            correctPokeGuess++
            teamCheck = 6;
        }
        if (teamCheck == 5) {   
            alert("Nope. They weren't on my team...");
        }
        teamCheck++
    }
    pokeGuessRemain--
    if (pokeGuessRemain === 0) {
        alert("You are out of guesses. The Team I had when I faced the Elite Four was: Charizard, Polywrath, Alakazam, Victrebell, Raichu, and Onyx." )
        alert("You had " + correctPokeGuess + " correct answers.")
    } else {
        alert("You have: " + pokeGuessRemain + " guesses remaining.")
    }
}
*/

// FINAL TEXT?


//alert("Well, Thank you for playing, " + username + ". We hope you had fun and look forward to learning more about you.");
//console.log("Quiz complete.");