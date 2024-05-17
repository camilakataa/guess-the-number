let ComputerNumber = Math.ceil(Math.random() * 100 - 1);
let attempts = document.getElementById('attempts');
let guesses = document.getElementById('guesses');
let userAttempts = 0;
let userGuesses = [];
const maxAttemptsText = document.getElementById('maxAttempts');
const maxAttempts = 10;
maxAttemptsText.innerHTML = maxAttempts;

function newGame() {
    window.location.reload()
}

function updateScreen() {
    let userGuess = Number(document.getElementById('inputBox').value);
    let inputBox = document.getElementById('inputBox')
    let message = document.getElementById('textOutput');

    if (userAttempts < maxAttempts) { 
        if (userGuess < 0 || userGuess > 100) {
            alert('Invalid Number');
            newGame();
        } else if (userGuess < ComputerNumber) {
            message.textContent ='Too Low'
            inputBox.value = ''
            userAttempts++
            userGuesses.push(` ${userGuess}`)
        } else if (userGuess > ComputerNumber) {
            message.textContent ='Too high'
            inputBox.value = ''
            userAttempts++
            userGuesses.push(` ${userGuess}`)
        } else if (userGuess = ComputerNumber) {
            message.textContent ='Congratulations, you won!'
            userAttempts++
            userGuesses.push(` ${userGuess}`)
            inputBox.setAttribute('Readonly', 'Readonly')
        }
        attempts.innerHTML = userAttempts
        guesses.innerHTML = userGuesses
    } else {
        message.textContent = `You lose! The computer number was: ${ComputerNumber}`
        inputBox.setAttribute('Readonly', 'Readonly')
    }
}
