const words = [
    'javascript', 
    'hangman', 
    'programming', 
    'computer', 
    'internet', 
    'developer', 
    'coding',
    'education',
    'concatenate',
    'publisher',
    'controller',
    'string',
    'interger',
    'boolean'
];
let chosenWord;
let guessedLetters = [];
let remainingAttempts;

function startGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    remainingAttempts = 6;
    displayWord();
    displayLetters();
    updateMessage('');
}

function displayWord() {
    const wordDisplay = document.getElementById('wordDisplay');
    wordDisplay.innerHTML = chosenWord.split('').map(letter => {
        return guessedLetters.includes(letter) ? letter : '_';
    }).join(' ');
}

function displayLetters() {
    const lettersContainer = document.getElementById('lettersContainer');
    lettersContainer.innerHTML = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet.split('').forEach(letter => {
        const button = document.createElement('button');
        button.innerText = letter;
        button.classList.add('letter');
        button.onclick = () => guess(letter);
        lettersContainer.appendChild(button);
    });
}

function guess(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!chosenWord.includes(letter)) {
            remainingAttempts--;
        }
        displayWord();
        displayLetters();
        checkGameStatus();
    }
}

function checkGameStatus() {
    if (remainingAttempts === 0) {
        updateMessage('Game Over! You Lost. The word was ' + chosenWord);
    } else if (chosenWord.split('').every(letter => guessedLetters.includes(letter))) {
        updateMessage('Congratulations! You Won!');
    }
}

function updateMessage(message) {
    document.getElementById('message').innerText = message;
}

function resetGame() {
    startGame();
}

// Start the game when the page loads
window.onload = startGame;