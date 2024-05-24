let computerNumber = Math.ceil(Math.random() * 100);
const inputBox = document.getElementById('inputBox');
const guessButton = document.getElementById('guessButton');
let attempts = document.getElementById('attempts');
let guesses = document.getElementById('guesses');
let userAttempts = 0;
let userGuesses = [];
const maxAttemptsText = document.getElementById('maxAttempts');
const maxAttempts = 10;
maxAttemptsText.innerHTML = maxAttempts;

function newGame() {
    window.location.reload();
}

inputBox.addEventListener('keypress', (event) => {
    if (userAttempts <= maxAttempts - 1) { 
        if (event.key === 'Enter') {
            updateScreen();
        }
    }
}
)

function updateScreen() {
    let message = document.getElementById('textOutput');
    let userGuess = Number(document.getElementById('inputBox').value);

    if (userAttempts < maxAttempts - 1) { 
        if (userGuess < 0 || userGuess > 100) {
            message.textContent ='Invalid Number';
            inputBox.setAttribute('disabled', 'disabled');
            guessButton.setAttribute('disabled', 'disabled');
        } else if (userGuess < computerNumber) {
            message.textContent ='Too Low';
            inputBox.value = '';
            userAttempts++;
            userGuesses.push(` ${userGuess}`);
        } else if (userGuess > computerNumber) {
            message.textContent ='Too high';
            inputBox.value = '';
            userAttempts++;
            userGuesses.push(` ${userGuess}`);
        } else if (userGuess = computerNumber) {
            message.textContent ='Congratulations, you won!';
            userAttempts++;
            userGuesses.push(` ${userGuess}`);
            inputBox.setAttribute('disabled', 'disabled');
            guessButton.setAttribute('disabled', 'disabled');
        } 
    } else if (userGuess != computerNumber) {
        message.textContent = `You lose! The computer number was: ${computerNumber}`;
        userAttempts++;
        userGuesses.push(` ${userGuess}`);
        inputBox.setAttribute('disabled', 'disabled');
        guessButton.setAttribute('disabled', 'disabled');
        } else if (userGuess = computerNumber) {
            message.textContent ='Congratulations, you won!';
            userAttempts++;
            userGuesses.push(` ${userGuess}`);
            inputBox.setAttribute('disabled', 'disabled');
            guessButton.setAttribute('disabled', 'disabled');
        }
    attempts.innerHTML = userAttempts
    guesses.innerHTML = userGuesses
}
