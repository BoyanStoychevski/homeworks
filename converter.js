// script.js
const words = ["FRIENDS", "BREAKINGBAD", "INCEPTION", "MATRIX", "GODFATHER"];
let selectedWord;
let lives;
let guessedLetters;

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    lives = 6;
    guessedLetters = [];
    updateWordDisplay();
    updateLivesDisplay();
    createLetterButtons();
    document.getElementById('message').textContent = '';
}

function updateWordDisplay() {
    const wordDisplay = selectedWord
        .split('')
        .map(letter => guessedLetters.includes(letter) ? letter : '_')
        .join(' ');
    document.getElementById('word').textContent = wordDisplay;

    if (!wordDisplay.includes('_')) {
        document.getElementById('message').textContent = '🎉 Victory! You guessed the word!';
        disableAllButtons();
    }
}

function updateLivesDisplay() {
    document.getElementById('lives').textContent = `Lives: ${lives}`;
    if (lives <= 0) {
        document.getElementById('message').textContent = `💀 Game Over! The word was ${selectedWord}.`;
        disableAllButtons();
    }
}

function createLetterButtons() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const guessesDiv = document.getElementById('guesses');
    guessesDiv.innerHTML = '';
    
    alphabet.split('').forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.className = 'letter-btn';
        button.onclick = () => guessLetter(letter);
        guessesDiv.appendChild(button);
    });
}

function guessLetter(letter) {
    guessedLetters.push(letter);
    document.querySelector(`button:contains('${letter}')`).disabled = true;

    if (selectedWord.includes(letter)) {
        updateWordDisplay();
    } else {
        lives--;
        updateLivesDisplay();
    }
}

function disableAllButtons() {
    const buttons = document.querySelectorAll('.letter-btn');
    buttons.forEach(button => button.disabled = true);
}

startGame();
