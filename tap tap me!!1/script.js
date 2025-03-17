const words = ["javascript", "html", "css", "programming", "web","car","carrot","group","shahriyor","tap","super","game","database","joins"];
let chosenWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = new Set();
let attempts = 6;

function updateWordDisplay() {
    let display = chosenWord.split('').map(letter => 
        guessedLetters.has(letter) ? letter : '_'
    ).join(' ');
    document.getElementById('word').textContent = display;
}

function guessLetter() {
    let letter = document.getElementById('letter').value.toLowerCase();
    let result = document.getElementById('result');

    if (letter.length !== 1 || !letter.match(/[a-z]/)) {
        result.textContent = 'Write one letter';
        return;
    }

    if (guessedLetters.has(letter)) {
        result.textContent = 'You guessed this letter';
        return;
    }

    guessedLetters.add(letter);

    if (chosenWord.includes(letter)) {
        updateWordDisplay();
        if (!document.getElementById('word').textContent.includes('_')) {
            result.textContent = 'Congratulations!! You Guessed this word';
        }
    } else {
        attempts--;
        result.textContent = `This word dont have this letter your tries: ${attempts}`;
        if (attempts === 0) {
            result.textContent += `Game over.Choosen word is: ${chosenWord}`;
        }
    }

    document.getElementById('letter').value = '';
}

updateWordDisplay();
