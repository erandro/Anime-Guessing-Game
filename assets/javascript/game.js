


// ++Array++ of the words
var words = ["bannana", "avocado", "good or bad"];

// ++Array++ of chosen word
var alredyChosen = [];

// **function** check if chosenWord was used - if not - start playing
function startGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    console.log(chosenWord);
    if (words.length === alredyChosen.length) {
        alert("I'm out off words\n\nThanks for palying");
    }
    else if (alredyChosen.includes(chosenWord)) {
        console.log("already chosen word");
        startGame()
    } else {
        console.log("new word");
        alredyChosen.push(chosenWord);
        game()
    }
}


function yes() {
    document.getElementById("theWord").textContent = chosenWord;
}


// **function** The game sequence
function game() {

    // making empty arrays for later use and counts vars
    var wrongChar = [];
    var rightChar = []; // didn't used that array
    var used_Char = [];
    var countDown = 5;
    var countUp = 0;

    // Console word length, Showing the word blanked and Insert space between word's characters
    var charNum = chosenWord.length;
    console.log(charNum)
    var blankWord = "_".repeat(charNum);
    console.log(blankWord)
    function SpaceInWord() {
        spacedWord = (blankWord.split('').join(' '));
    }
    SpaceInWord()
    console.log(spacedWord)

    // function to replace the character (I have no idea how :)
    String.prototype.replaceAt = function (index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
    // This adds what you enter (user character) to the blank word
    function addChar(char) {
        for (var index = 0; index < chosenWord.length; index++) {
            if (chosenWord[index] === char) {
                blankWord = (blankWord.replaceAt(index, char));
                SpaceInWord();
                console.log(spacedWord);
                countUp++;
            }
        }
    }

    addChar(' ');


    document.onkeyup = function (saveKey) {
        var userChar = saveKey.key;
        console.log("you chose " + userChar);
        if (used_Char.includes(userChar)) {
            console.log("you already chose this character");
        }
        else if ((chosenWord.indexOf(userChar) > -1)) {
            console.log(userChar + " is correct")
            rightChar.push(userChar);
            used_Char.push(userChar);
            addChar(userChar);
            if (countUp === chosenWord.length) {
                alert("You won!");
                startGame();
            }
        }
        else {
            console.log(userChar + " is wrong")
            wrongChar.push(userChar);
            used_Char.push(userChar);
            countDown = countDown - 1;
            document.getElementById("countDown").textContent = "You have " + countDown + " guesses left";
            document.getElementById("wrongChar").textContent = wrongChar;
            if (countDown === 0) {
                alert('Oh no, you lost.\n \n it was "' + chosenWord.toUpperCase() + '"');
            }
        }
    }
}

startGame();