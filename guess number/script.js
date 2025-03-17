
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
   
    let userGuess = document.getElementById('guess').value;
    let result = document.getElementById('result');


    attempts++;

    if (userGuess == randomNumber) {
        result.textContent = `Congratulations!You win you guees this    ${randomNumber} number for ${attempts} tryes.`;
        result.style.color = 'green';
        disableInput();
    } else if (userGuess < randomNumber) {
        result.textContent = 'Your number is lower.Try again';
        result.style.color = 'red';
    } else if (userGuess > randomNumber) {
        result.textContent = 'Your number is bigger.Try again';
        result.style.color = 'red';
    }
}

function disableInput() {
    document.getElementById('guess').disabled = true;
    document.querySelector('button').disabled = true;
}
