

// Array of the words
var words = [
    "poor",
    "good or bad",
    "bad",
    "evil",
    "navy",
    "bannana",
    "avocado",
];

// Pick a random word from the array
function chosenWord() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    console.log(chosenWord);
}
chosenWord();

// Console word length
var charNum = chosenWord.length;
console.log(charNum);

// Showing the word blanked
var blankWord = "_".repeat(charNum);
console.log(blankWord);

// Insert space between word's characters
function SpaceInWord() {
    spacedWord = (blankWord.split('').join(' '));
}

// Console empty arrays for ,worng characters, right characters, and used characters
var wrongChar = [];
var rightChar = [];
var used_Char = [];

// This function replace the character (I have no idea how :)
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


// Game:

document.onkeyup = function (saveKey) {

    var userChar = saveKey.key;
    console.log("you chose " + userChar);

    if (used_Char.includes(userChar)) {
        console.log("you already chose this character");
    }
    else if ((chosenWord.indexOf(userChar) > -1)) {
        console.log(userChar + " is correct")
        rightChar.push(userChar)
        used_Char.push(userChar);

        for (var index = 0; index < chosenWord.length; index++) {
            if (chosenWord[index] === userChar) {
                blankWord = (blankWord.replaceAt(index, userChar));
                SpaceInWord();
                console.log(spacedWord);


            }

        }


    }
    else {
        console.log(userChar + " is wrong")
        wrongChar.push(userChar)
        used_Char.push(userChar);
    }
}

