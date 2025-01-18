const words = {
    Films: [
        { word: "deadpool", clue: "A comedy movie about super heros." },
        { word: "titanic", clue: "A tragic love story on a sinking ship." },
        { word: "avatar", clue: "A sci-fi film about an alien planet." }
    ]
};

let category = "Films";
let gameWord = "";
let gameClue = "";
let displayWord = [];
let lives = 10;
let guessedLetters = [];

const alphabetDiv = document.getElementById("alphabet");
const wordElement = document.getElementById("word");
const livesElement = document.getElementById("lives");
const clueElement = document.getElementById("clue");
const hintButton = document.getElementById("hint-button");
const playAgainButton = document.getElementById("play-again-button");

function initializeGame() {
    const chosenWordObj = words[category][Math.floor(Math.random() * words[category].length)];
    gameWord = chosenWordObj.word;
    gameClue = chosenWordObj.clue;
    displayWord = "_".repeat(gameWord.length).split("");
    lives = 10;
    guessedLetters = [];

    wordElement.textContent = displayWord.join(" ");
    livesElement.textContent = lives;
    clueElement.textContent = "-";
    alphabetDiv.innerHTML = "";

    // Create alphabet buttons
    for (let charCode = 97; charCode <= 122; charCode++) {
        const letter = String.fromCharCode(charCode);
        const button = document.createElement("button");
        button.textContent = letter;
        button.addEventListener("click", () => handleGuess(letter, button));
        alphabetDiv.appendChild(button);
    }
}

function handleGuess(letter, button) {
    button.disabled = true;

    if (guessedLetters.includes(letter)) return;
    guessedLetters.push(letter);

    if (gameWord.includes(letter)) {
        gameWord.split("").forEach((char, index) => {
            if (char === letter) displayWord[index] = letter;
        });
    } else {
        lives--;
    }

    wordElement.textContent = displayWord.join(" ");
    livesElement.textContent = lives;

    if (!displayWord.includes("_")) {
        wordElement.textContent = "Congratulations! You Won!";
        disableButtons();
    } else if (lives === 0) {
        wordElement.textContent = `Game Over! The word was: ${gameWord}`;
        disableButtons();
    }
}

function disableButtons() {
    const buttons = alphabetDiv.querySelectorAll("button");
    buttons.forEach(button => (button.disabled = true));
}

hintButton.addEventListener("click", () => {
    clueElement.textContent = gameClue;
});

playAgainButton.addEventListener("click", initializeGame);

// Initialize the first game
initializeGame();
