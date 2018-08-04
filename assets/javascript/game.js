


// ++Array++ of the words
var words = ["sword art online", "berserk", "kill la kill", "naruto shippuden", "digimon", "death parade", "no game no life", "nichijou", "one punch man", "katana maidens", "bleach", "hunter x hunter", "girls last tour", "basilisk", "the saga of tanya the evil", "kids on the slope", "the ancient magus bride", "zodiac war", "miss Kobayashis gragon maid", "food wars", "kinos journey", "ping pong the animation", "made in abyss", "little witch academia", "boruto", "death note", "fairy tail", "my hero academia", "naruto", "the twelve kingdoms", "neon genesis evangelion", "vision of escaflowne", "cowboy bebop", "pokemon", "dragon ball z", "attack on titan"];

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


// **function** The game sequence
function game() {

    // making empty arrays for later use and counts vars
    var wrongChar = [];
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
                var newLine = document.getElementById("theWord");
                newLine.textContent = spacedWord;
            }
        }
    }

    addChar(' ');
    var newLine = document.getElementById("theWord");
    newLine.textContent = spacedWord;
    var newCount = document.getElementById("countDown");
    newCount.textContent = "You have " + countDown + " guesses left";
    var WorngUsed = document.getElementById("wrongChar");
    WorngUsed.textContent = wrongChar;

    document.onkeyup = function (saveKey) {
        var userChar = saveKey.key;
        console.log("you chose " + userChar);
        if (used_Char.includes(userChar)) {
            console.log("you already chose this character");
        }
        else if ((chosenWord.indexOf(userChar) > -1)) {
            console.log(userChar + " is correct")
            used_Char.push(userChar);
            addChar(userChar);
            if (countUp === chosenWord.length) {
                window.setTimeout(function () {
                    alert("You got that!");
                    var winCount = document.getElementById("Winings");
                    winCount.textContent = "Your winings: " + alredyChosen.length;
                    startGame();
                }, 1);
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