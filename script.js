const quotes = [
    "It does not do to dwell on dreams and forget to live. - Albus Dumbledore",
    "Happiness can be found even in the darkest of times, if one only remembers to turn on the light. - Albus Dumbledore",
    "It is our choices, Harry, that show what we truly are, far more than our abilities. - Albus Dumbledore",
    "You are protected, in short, by your ability to love. - Professor Snape",
    "It matters not what someone is born, but what they grow to be. - Albus Dumbledore"
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerText = quotes[randomIndex];
}

function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'Hedwig') {
        result.innerText = "Correct! Harry's pet owl is Hedwig.";
    } else {
        result.innerText = "Incorrect. Try again!";
    }
}
