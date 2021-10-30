// ***"Hangman" word game***

var animeShows = {
    "wandering son": ["assets/images/hourou_musuko.png",
        "assets/images/hourou_musuko2.png"
    ],
    "inuyasha": ["assets/images/inuyasha.png",
        "assets/images/inuyasha2.png"
    ],
    "tokyo ghoul": ["assets/images/tokyo_ghoul.png",
        "assets/images/tokyo_ghoul2.png"
    ],
    "tower of god": ["assets/images/tower_of_god.png",
        "assets/images/tower_of_god2.png"
    ],
    "eureka seven": ["assets/images/eureka_seven.png",
        "assets/images/eureka_seven2.png"
    ],
    "fullmetal alchemist": ["assets/images/fullmetal_alchemist.png",
        "assets/images/fullmetal_alchemist2.png"
    ],
    "sailor moon": ["assets/images/sailor_moon.png",
        "assets/images/sailor_moon2.png"
    ],
    "one piece": ["assets/images/one_piece.png",
        "assets/images/one_piece2.png"
    ],
    "sword art online": ["assets/images/sword_art_online.png",
        "assets/images/sword_art_online2.png"
    ],
    "berserk": ["assets/images/berserk.png",
        "assets/images/berserk2.png"
    ],
    "kill la kill": ["assets/images/kill_la_kill.png",
        "assets/images/kill_la_kill2.png"
    ],
    "naruto shippuden": ["assets/images/naruto_shippuden.png",
        "assets/images/naruto_shippuden2.png"
    ],
    "digimon": ["assets/images/digimon.png",
        "assets/images/digimon2.png"
    ],
    "death parade": ["assets/images/death_parade.png",
        "assets/images/death_parade2.png"
    ],
    "no game no life": ["assets/images/no_game_no life.png",
        "assets/images/no_game_no life2.png"
    ],
    "nichijou": ["assets/images/nichijou.png",
        "assets/images/nichijou2.png"
    ],
    "one punch man": ["assets/images/one_punch_man.png",
        "assets/images/one_punch_man2.png"
    ],
    "katana maidens": ["assets/images/katana_maidens.png",
        "assets/images/katana_maidens2.png"
    ],
    "bleach": ["assets/images/bleach.png",
        "assets/images/bleach2.png"
    ],
    "hunter x hunter": ["assets/images/hunter_x_hunter.png",
        "assets/images/hunter_x_hunter2.png"
    ],
    "girls last tour": ["assets/images/girls_last_tour.png",
        "assets/images/girls_last_tour2.png"
    ],
    "basilisk": ["assets/images/basilisk.png",
        "assets/images/basilisk2.png"
    ],
    "the saga of tanya the evil": ["assets/images/the_saga_of_tanya_the_evil.png",
        "assets/images/the_saga_of_tanya_the_evil2.png"
    ],
    "kids on the slope": ["assets/images/kids_on_the_slope.png",
        "assets/images/kids_on_the_slope2.png"
    ],
    "the ancient magus bride": ["assets/images/the_ancient_magus_bride.png",
        "assets/images/the_ancient_magus_bride2.png"
    ],
    "zodiac war": ["assets/images/zodiac_war.png",
        "assets/images/zodiac_war2.png"
    ],
    "miss kobayashis dragon maid": ["assets/images/miss_kobayashis_dragon_maid.png",
        "assets/images/miss_kobayashis_dragon_maid2.png"
    ],
    "food wars": ["assets/images/food_wars.png",
        "assets/images/food_wars2.png"
    ],
    "kinos journey": ["assets/images/kinos_journey.png",
        "assets/images/kinos_journey2.png"
    ],
    "ping pong the animation": ["assets/images/ping_pong_the_animation.png",
        "assets/images/ping_pong_the_animation2.png"
    ],
    "made in abyss": ["assets/images/made_in_abyss.png",
        "assets/images/made_in_abyss2.png"
    ],
    "little witch academia": ["assets/images/little_witch_academia.png",
        "assets/images/little_witch_academia2.png"
    ],
    "boruto": ["assets/images/boruto.png",
        "assets/images/boruto2.png"
    ],
    "death note": ["assets/images/death_note.png",
        "assets/images/death_note2.png"
    ],
    "fairy tail": ["assets/images/fairy_tail.png",
        "assets/images/fairy_tail2.png"
    ],
    "my hero academia": ["assets/images/my_hero_academia.png",
        "assets/images/my_hero_academia2.png"
    ],
    "naruto": ["assets/images/naruto.png",
        "assets/images/naruto2.png"
    ],
    "the twelve kingdoms": ["assets/images/the_twelve_kingdoms.png",
        "assets/images/the_twelve_kingdoms2.png"
    ],
    "neon genesis evangelion": ["assets/images/neon_genesis_evangelion.png",
        "assets/images/neon_genesis_evangelion2.png"
    ],
    "vision of escaflowne": ["assets/images/vision_of_escaflowne.png",
        "assets/images/vision_of_escaflowne2.png"
    ],
    "cowboy bebop": ["assets/images/cowboy_bebop.png",
        "assets/images/cowboy_bebop2.png"
    ],
    "pokemon": ["assets/images/pokemon.png",
        "assets/images/pokemon2.png"
    ],
    "dragon ball z": ["assets/images/dragon_ball_z.png",
        "assets/images/dragon_ball_z2.png"
    ],
    "attack on titan": ["assets/images/attack_on_titan.png",
        "assets/images/attack_on_titan2.png"
    ],
    "akudama drive": ["assets/images/akudama_drive.png",
        "assets/images/akudama_drive2.png"
    ],
    "anohana the flower we saw that day": ["assets/images/anohana_the_flower_we_saw_that_day.png",
        "assets/images/anohana_the_flower_we_saw_that_day2.png"
    ],
    "bna": ["assets/images/bna.png",
        "assets/images/bna2.png"
    ],
    "deca dance": ["assets/images/deca_dance.png",
        "assets/images/deca_dance2.png"
    ],
    "jujutsu kaisen": ["assets/images/jujutsu_kaisen.png",
        "assets/images/jujutsu_kaisen2.png"
    ],
    "mwz": ["assets/images/mwz.png",
        "assets/images/mwz2.png"
    ],
    "odd taxi": ["assets/images/odd_taxi.png",
        "assets/images/odd_taxi2.png"
    ],
    "the promised neverland": ["assets/images/the_promised_neverland.png",
        "assets/images/the_promised_neverland2.png"
    ],
    "to your eternity": ["assets/images/to_your_eternity.png",
        "assets/images/to_your_eternity2.png"
    ],
    "your lie in april": ["assets/images/your_lie_in_april.png",
        "assets/images/your_lie_in_april2.png"
    ]
};
var words = Object.keys(animeShows);
var alredyChosenWords = [];
var countWin = 0;
var imgOpacity;
var imgDarkerOpacity = 0;
var modelState = undefined;
// Change img opacity
function imgOpacityChange(theOpacity, imgIndex) {
    imgOpacity = theOpacity;
    document.getElementById("animeImage").style.opacity = imgOpacity;
    document.getElementById("animeImage").src = animeShows[chosenWord][imgIndex];
}

// checks if word was choosed
function isWordChosen() {
    if (words.length === alredyChosenWords.length) {
        modelState = "end";
        document.getElementById("modal-text").append("I'm out off words\n\nThanks for palying");
        modal.style.display = "block";
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

// Modal
var modal = document.getElementById('modalId');
var modalisDisplayed = false;
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    if (modelState === "win") {
        modelWin();
    } else if (modelState === "lose") {
        modelLose();
    } else if (modelState === "end") {
        modelEnd();
    }
}
window.onclick = function (event) {
    if (event.target == modal) {
        if (modelState === "win") {
            modelWin();
        } else if (modelState === "lose") {
            modelLose();
        } else if (modelState === "end") {
            modelEnd();
        }
    }
}
function modelWin() {
    modal.style.display = "none";
    modalisDisplayed = false;
    document.getElementById("modal-text").innerHTML = "";
    countWin++;
    document.getElementById("winings").textContent = "Your winings: " + countWin;
    startGame();
}
function modelLose() {
    modal.style.display = "none";
    modalisDisplayed = false;
    document.getElementById("modal-text").innerHTML = "";
    startGame();
}
function modelEnd() {
    window.location.reload(true);
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
    var countOtherChar = 0;
    var otherCharAlert = false;
    var interval = null;

    // Blank and space the chosen word
    var blankWord = "_".repeat(chosenWord.length);
    function SpaceInWord() {
        // spacedWord = (blankWord.split('').join(' '));
        spacedWord = blankWord;
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
                $("#theWord").text(spacedWord);
                //document.getElementById("animeImage").src = "";
            }
        }
    }

    // Adds space to the blank word
    addChar(' ');

    // Display the word, number of mistakes and worng characters in html 
    $("#theWord").text(spacedWord);
    document.getElementById("countDown").textContent = "You have " + countDown + " guesses left";
    document.getElementById("wrongChar").textContent = wrongChar;

    // When character is pressed sequence - keyboard
    document.onkeyup = function (pressedKey) {
        if (!modalisDisplayed) {
            var userChar = pressedKey.key;
            console.log("you chose " + userChar);

            // Correct character sequence
            function correctCharacter() {
                used_Char.push(userChar);
                addChar(userChar);
            }
            // Guessed all characters sequence
            function guessedAllCharacters() {
                modelState = "win";
                document.getElementById("modal-text").append("You got that!");
                modal.style.display = "block";
                modalisDisplayed = true;
            }
            // Worng character sequence
            function wrongCharacter() {
                wrongChar.push(userChar);
                used_Char.push(userChar);
                countDown = countDown - 1;
                document.getElementById("countDown").textContent = "You have " + countDown + " guesses left";
                document.getElementById("wrongChar").textContent = wrongChar;
                if(otherCharAlert){
                    otherCharAlert=false
                    countOtherChar=0;
                    clearInterval(interval);
                }
            }
            // Game over sequence
            function gameOver() {
                modelState = "lose";
                document.getElementById("modal-text").append('Oh no, you lost.\n \n it was "' + chosenWord.toUpperCase() + '"');
                modal.style.display = "block";
                modalisDisplayed = true;
            }
            // Blink text
            function bninkText(id) {
                interval = setInterval(function () {
                    var alertAboutChar = document.getElementById(id);
                    alertAboutChar.style.visibility = (alertAboutChar.style.visibility == 'hidden' ? '' : 'hidden');
                }, blink_speed);
            }

            if (used_Char.includes(userChar)) {
                console.log("you already chose this character");
            }
            else if ((chosenWord.indexOf(userChar) > -1)) {
                if(otherCharAlert){
                    otherCharAlert=false
                    countOtherChar=0;
                    clearInterval(interval);
                    document.getElementById("countDown").textContent = "You have " + countDown + " guesses left";
                }
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
                } else {
                    // Alert user if he's not typing English char
                    countOtherChar++;
                    if (countOtherChar === 6){
                        document.getElementById("countDown").textContent = "Please check that your Caps Lock key is off and that you are using English typing";
                        otherCharAlert = true;
                        var blink_speed = 1000;
                        bninkText('countDown');
                    }
                }
            }
        }
    }

    // When character is pressed sequence - mobile
    $(".key").unbind().click(function () {
        if (!modalisDisplayed) {
            var userChar = $(this).children().text();
            // Correct character sequence
            function correctCharacter() {
                used_Char.push(userChar);
                addChar(userChar);
            }
            // Guessed all characters sequence
            function guessedAllCharacters() {
                modelState = "win";
                document.getElementById("modal-text").append("You got that!");
                modal.style.display = "block";
                modalisDisplayed = true;
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
                modelState = "lose";
                document.getElementById("modal-text").append('Oh no, you lost.\n \n it was "' + chosenWord.toUpperCase() + '"');
                modal.style.display = "block";
                modalisDisplayed = true;

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
    })

}