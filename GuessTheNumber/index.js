let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    console.log(computerGuess)

    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};

const newGame = () => {
    window.location.reload();
}

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled", true)
}

const compareGuess = () => {
    const userNumber = document.getElementById("inputBox").value;
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    if (userGuess.length < maxGuess) {

        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your Guess is High";
            userNumberUpdate.value = "";
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your Guess is low";
            userNumberUpdate.value = "";
        } else {
            userGuessUpdate.innerHTML = "You Are Right...";
            userNumberUpdate.value = "";
            startNewGame();
        }
    } else {

        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `Your Loose!! Correct Ans is ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `Your Loose!! Correct Ans is ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        } else {
            userGuessUpdate.innerHTML = "You Are Right...";
            userNumberUpdate.value = "";
            startNewGame();
        }

    }
    document.getElementById("attempts").innerHTML = userGuess.length;
}

const easyMode = () => {
    maxGuess = 10;
    startGame();
}

const hardMode = () => {
    maxGuess = 5;
    startGame();
}