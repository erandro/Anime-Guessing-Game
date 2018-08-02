

// Array of the words
var words = [
    "poor",
    "good",
    "bad",
    "evil",
    "navy",
    "bannana",
    "avocado",
];

// Pick a random word from the array
chosenWord = words[Math.floor(Math.random() * words.length)];
console.log(chosenWord);

// Console word length
charNum = chosenWord.length;
console.log(charNum);

// Showing the word blanked
var blankWord = "_ ".repeat(charNum);
console.log(blankWord);

// Console empty arrays for both worng and right characters 
var wrongChar = ["z"];
var rightChar = ["a"];

// user put in a character ????
document.onkeyup = function (event) {
    var userChar = event.key;
    console.log(userChar);


    // if user character is in the word
    if ((chosenWord.indexOf(userChar) > -1)) {
        // check if the character is in the "rightChar" array
        for (var i = 0; i < rightChar.length; i++) {
            if (rightChar[i] === userChar) {
                // when true - console already exists
                console.log("you already chose this character");
            }
            else {
                console.log("correct");

            }
        }
        rightChar.push(userChar);
    }
    else {
        for (var j = 0; j < wrongChar.length; j++) {
            if (wrongChar[j] === userChar) {
                // when true - console already exists
                console.log("you already chose this character");
            }
            else {
                console.log("wrong");
            }
        }
    }


}
