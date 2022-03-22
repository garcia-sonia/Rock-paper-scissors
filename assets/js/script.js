//Declare game variables
const computerPicksShow = document.getElementById('computer-picks');
const youPickShow = document.getElementById('you-pick');
const whoWinsShow = document.getElementById('who-wins');
const differentChoices = document.querySelectorAll('button');

let youPick;
let computerPicks;
let result;

let userScoreShow = document.getElementById('user-score');
let computerScoreShow = document.getElementById('computer-score');

//Default score values are set to 0 and incremented after each round until one of the players wins three rounds
let userScoreHTML = document.getElementById('user-score')[0];
let computerScoreHTML = document.getElementById('computer-score')[0];
let userScore = 0;
let computerScore = 0;

//Add event listener to buttons on click for each choice of rock, paper or scissors from user.
//Display user's choice for each round (innerHTML) 
//Generate computer's choice with generateComputerPicks() function.
//Finally calculate result for each round with calculateResult() function.
differentChoices.forEach(differentChoice => differentChoice.addEventListener('click', (e) => {
    youPick = e.target.id;
    youPickShow.innerHTML = youPick;
    generateComputerPicks();
    calculateResult();
}))

//Create function to generate computer choice with Math.random().
function generateComputerPicks() {
    const anyNumber = Math.floor(Math.random() * differentChoices.length) + 1;
    const choices = ['rock', 'paper', 'scissors'];
    computerPicks = choices[anyNumber] || 'rock';
    computerPicksShow.innerHTML = computerPicks;
}

//Create function to calculate result for each round taking every possible combination into account.
//Display result (It's a draw, You lose! or You win!)
//Apply lose() or win() function to increment scores on leaderboard depending on whether user/computer loses or wins.
function calculateResult() {

    if (computerPicks === youPick) {
        result = 'It\'s a draw! &#128580;'
    }

    if (computerPicks === 'rock' && youPick === 'scissors') {
        result = 'You lose! &#128531;'
        lose(computerScoreHTML);
    }

    if (computerPicks === 'rock' && youPick === 'paper') {
        result = 'You win! &#128515'
        win(userScoreHTML);
    }

    if (computerPicks === 'paper' && youPick === 'scissors') {
        result = 'You win! &#128515'
        win(userScoreHTML);
    }

    if (computerPicks === 'paper' && youPick === 'rock') {
        result = 'You lose! &#128531;'
        lose(computerScoreHTML);
    }

    if (computerPicks === 'scissors' && youPick === 'rock') {
        result = 'You win! &#128515'
        win(userScoreHTML);
    }

    if (computerPicks === 'scissors' && youPick === 'paper') {
        result = 'You lose! &#128531;'
        lose(computerScoreHTML);
    }

    whoWinsShow.innerHTML = result
}

//Create function to increment user's score on leaderboard if user wins round.
//Then show end of game modal (with Winner text) if user reaches a total score of three.
function win() {
    userScoreShow.innerHTML = ++userScore;
    modalWinner();
}

//Create function to increment computer's score on leaderboard if user loses round.
//Then show end of game modal (with Loser text) if computer reaches a total score of three.
function lose() {
    computerScoreShow.innerHTML = ++computerScore;
    modalWinner();
}

//Set up buttons to open and close (on click) modal box with Game Rules.
//Declare Game Rules modal variables:
const rulesBox = document.getElementsByClassName('rules-modal')[0];
const rulesButton = document.getElementsByClassName('rules')[0];
const closeSpan = document.getElementsByClassName('close')[0];

//Add Event Listener: When user clicks the Game Rules Button, modal box with rules opens. 
rulesButton.addEventListener('click', () => {
    rulesBox.style.display = 'block';
});

//Add Event Listner: When user clicks on (x), rules modal closes
closeSpan.addEventListener('click', () => {
    rulesBox.style.display = 'none';
});

//Announce winner using an end of game modal box (When a player reaches a total score of three, the game ends and the winner is declared).
//Declare end of game modal variables:
const endModal = document.getElementsByClassName('end-game-modal')[0];
const modalHeader = document.getElementsByClassName('end-modal-header')[0];
const modalText = document.getElementsByClassName('end-modal-content')[0];

function modalWinner() {
    if (userScore === 3) {
        endModal.style.display = 'block';
        modalHeader.textContent = 'Shiver me timbers! ... You\'ve defeated the mighty Redbeard!';
        modalText.textContent = `Your score: ${userScore} / Redbeard's Score: ${computerScore}`;
    } else if (computerScore === 3) {
        endModal.style.display = 'block';
        modalHeader.textContent = 'Redbeard wins, ... better luck next time!';
        modalText.textContent = `Your score: ${userScore} / Redbeard's Score: ${computerScore}`;
    }
}


/**
 * Setting up the Play again function.
 */

const againButton = document.getElementsByClassName('again')[0];

againButton.addEventListener('click', () => {
    closeModal(endModal);
});

function closeModal() {
    endModal.style.display = 'none';
    newGame(userScoreHTML, computerScoreHTML);
}

function newGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementsByClassName('again');
    whoWinsShow.innerHTML = '';
    youPickShow.innerHTML = '';
    computerPicksShow.innerHTML = '';
    userScoreShow.innerHTML = 0;
    computerScoreShow.innerHTML = 0;
}