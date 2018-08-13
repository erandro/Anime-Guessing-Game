// ***Hangman word game***

// bug fixing:
// 1. disable non letter keys
// 2. fix capital letter situation
// 3. add start button
// 4. 

var words = ["sword art online", "berserk", "kill la kill", "naruto shippuden", "digimon", "death parade", "no game no life", "nichijou", "one punch man", "katana maidens", "bleach", "hunter x hunter", "girls last tour", "basilisk", "the saga of tanya the evil", "kids on the slope", "the ancient magus bride", "zodiac war", "miss kobayashis dragon maid", "food wars", "kinos journey", "ping pong the animation", "made in abyss", "little witch academia", "boruto", "death note", "fairy tail", "my hero academia", "naruto", "the twelve kingdoms", "neon genesis evangelion", "vision of escaflowne", "cowboy bebop", "pokemon", "dragon ball z", "attack on titan"];
var alredyChosenWords = [];
var countWin = 0;

// checks if word was choosed
function isWordChosen() {
    if (words.length === alredyChosenWords.length) {
        alert("I'm out off words\n\nThanks for palying");
    }
    else if (alredyChosenWords.includes(chosenWord)) {
        console.log("already chosen word");
        startGame();
    } else {
        console.log("new word");
        alredyChosenWords.push(chosenWord);
        game();
    }
}

// get unchosen word and start playing
function startGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    console.log(chosenWord);
    isWordChosen()
}

// Starting the game
startGame();

// Game sequence
function game() {

    var wrongChar = [];
    var used_Char = [];
    var countDown = 5;
    var countUp = 0;

    // Blank and space the chosen word
    var blankWord = "_".repeat(chosenWord.length);
    function SpaceInWord() {
        spacedWord = (blankWord.split('').join(' '));
    }
    SpaceInWord();
    console.log(spacedWord);

    // making a function that: Replace the correct character in the word
    String.prototype.replaceAt = function (index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    // Adds user character to the blank word
    function addChar(char) {
        for (var index = 0; index < chosenWord.length; index++) {
            if (chosenWord[index] === char) {
                blankWord = (blankWord.replaceAt(index, char));
                SpaceInWord();
                console.log(spacedWord);
                countUp++;
                var newLine = document.getElementById("theWord");
                newLine.textContent = spacedWord;
            }
        }
    }

    // Adds space to the blank word
    addChar(' ');

    // Display the word, number of mistakes and worng characters in html 
    var newLine = document.getElementById("theWord");
    newLine.textContent = spacedWord;
    var newCount = document.getElementById("countDown");
    newCount.textContent = "You have " + countDown + " guesses left";
    var WorngUsed = document.getElementById("wrongChar");
    WorngUsed.textContent = wrongChar;

    // When character is pressed sequence
    document.onkeyup = function (pressedKey) {
        var userChar = pressedKey.key;
        console.log("you chose " + userChar);
        // check if character was used
        if (used_Char.includes(userChar)) {
            console.log("you already chose this character");
        }
        // check if character is in the word (if so - correct character sequence)
        else if ((chosenWord.indexOf(userChar) > -1)) {
            console.log(userChar + " is correct")
            used_Char.push(userChar);
            addChar(userChar);
            // check if whole word was guessed (if so - new game)
            if (countUp === chosenWord.length) {
                window.setTimeout(function () {
                    alert("You got that!");
                    countWin++;
                    var winCount = document.getElementById("Winings");
                    winCount.textContent = "Your winings: " + countWin;
                    startGame();
                }, 1);
            }
        }
        // Worng character sequence
        else {
            if (userChar === "a") {
                console.log(userChar + " is wrong")
                wrongChar.push(userChar);
                used_Char.push(userChar);
                countDown = countDown - 1;
                document.getElementById("countDown").textContent = "You have " + countDown + " guesses left";
                document.getElementById("wrongChar").textContent = wrongChar;
                // Game over sequence
                if (countDown === 0) {
                    alert('Oh no, you lost.\n \n it was "' + chosenWord.toUpperCase() + '"');
                    countWin = 0
                    var winCount2 = document.getElementById("Winings");
                    winCount2.textContent = "Your winings: " + countWin;
                    startGame();
                }
            }
        }
    }
}