// ***Hangman word game***

// bug fixing:
// 1. disable non letter keys - V
// 2. fix capital letter situation - V
// 3. add start button -
// 4. 

var animeShows = {
    //"sword art online": "assets/images/",
    "berserk": ["assets/images/berserk.png",
        "assets/images/berserk2.png"
    ],
    //"kill la kill": "assets/images/",
    //"naruto shippuden": "assets/images/",
    "digimon": ["assets/images/digimon.png",
        "assets/images/digimon2.png"
    ],
    //"death parade": "assets/images/",
    //"no game no life": "assets/images/",
    //"nichijou": "assets/images/",
    //"one punch man": "assets/images/",
    //"katana maidens": "assets/images/",
    "bleach": ["assets/images/bleach.png",
        "assets/images/bleach2.png"
    ],
    "hunter x hunter": ["assets/images/hunter_x_hunter.png",
        "assets/images/hunter_x_hunter2.png"
    ],
    //"girls last tour": "assets/images/",
    //"basilisk": "assets/images/",
    //"the saga of tanya the evil": "assets/images/",
    //"kids on the slope": "assets/images/",
    //"the ancient magus bride": "assets/images/",
    //"zodiac war": "assets/images/",
    //"miss kobayashis dragon maid": "assets/images/",
    //"food wars": "assets/images/",
    //"kinos journey": "assets/images/",
    //"ping pong the animation": "assets/images/",
    //"made in abyss": "assets/images/",
    //"little witch academia": "assets/images/",
    "boruto": ["assets/images/boruto.png",
        "assets/images/boruto2.png"
    ],
    //"death note": "assets/images/",
    //"fairy tail": "assets/images/",
    //"my hero academia": "assets/images/",
    "naruto": ["assets/images/naruto.png",
        "assets/images/naruto2.png"
    ],
    //"the twelve kingdoms": "assets/images/",
    //"neon genesis evangelion": "assets/images/",
    //"vision of escaflowne": "assets/images/",
    //"cowboy bebop": "assets/images/",
    "pokemon": ["assets/images/pokemon.png",
        "assets/images/pokemon2.png"
    ],
    //"dragon ball z": "assets/images/",
    //"attack on titan": "assets/images/"
};
var words = Object.keys(animeShows);
var alredyChosenWords = [];
var countWin = 0;
var imgOpacity;
var imgDarkerOpacity = 0;

// Change img opacity
function imgOpacityChange(theOpacity, imgIndex) {
    imgOpacity = theOpacity;
    document.getElementById("animeImage").style.opacity = imgOpacity;
    document.getElementById("animeImage").src = animeShows[chosenWord][imgIndex];
}

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
        imgDarkerOpacity = 0;
        imgOpacityChange(0, 1);
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
                document.getElementById("theWord").textContent = spacedWord;
                //document.getElementById("animeImage").src = "";
            }
        }
    }

    // Adds space to the blank word
    addChar(' ');

    // Display the word, number of mistakes and worng characters in html 
    document.getElementById("theWord").textContent = spacedWord;
    document.getElementById("countDown").textContent = "You have " + countDown + " guesses left";
    document.getElementById("wrongChar").textContent = wrongChar;

    // When character is pressed sequence
    document.onkeyup = function (pressedKey) {
        var userChar = pressedKey.key;
        console.log("you chose " + userChar);

        // Correct character sequence
        function correctCharacter() {
            used_Char.push(userChar);
            addChar(userChar);
        }
        // Guessed all characters sequence
        function guessedAllCharacters() {
            window.setTimeout(function () {
                alert("You got that!");
                countWin++;
                document.getElementById("winings").textContent = "Your winings: " + countWin;
                startGame();
            }, 100);
        }
        // Worng character sequence
        function wrongCharacter() {
            wrongChar.push(userChar);
            used_Char.push(userChar);
            countDown = countDown - 1;
            document.getElementById("countDown").textContent = "You have " + countDown + " guesses left";
            document.getElementById("wrongChar").textContent = wrongChar;
        }
        // Game over sequence
        function gameOver() {
            window.setTimeout(function () {
                alert('Oh no, you lost.\n \n it was "' + chosenWord.toUpperCase() + '"');
                startGame();
            }, 100);
        }

        if (used_Char.includes(userChar)) {
            console.log("you already chose this character");
        }
        else if ((chosenWord.indexOf(userChar) > -1)) {
            console.log(userChar + " is correct")
            correctCharacter();
            if (countUp === chosenWord.length) {
                imgOpacityChange(1, 0);
                guessedAllCharacters();
            }
        }
        else {
            console.log(userChar + " is wrong");
            if ((userChar === "a") || (userChar === "b") || (userChar === "c") || (userChar === "d") || (userChar === "e") || (userChar === "f") || (userChar === "g") || (userChar === "h") || (userChar === "i") || (userChar === "j") || (userChar === "k") || (userChar === "m") || (userChar === "l") || (userChar === "n") || (userChar === "o") || (userChar === "p") || (userChar === "q") || (userChar === "r") || (userChar === "s") || (userChar === "t") || (userChar === "u") || (userChar === "v") || (userChar === "w") || (userChar === "x") || (userChar === "y") || (userChar === "z")) {
                imgDarkerOpacity = imgDarkerOpacity + 0.2;
                imgOpacityChange(imgDarkerOpacity, 1);
                wrongCharacter();
                if (countDown === 0) {
                    gameOver()
                }
            }
        }
    }
}