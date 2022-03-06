const computerPicksShow = document.getElementById('computer-picks');
const youPickShow = document.getElementById('you-pick');
const whoWinsShow = document.getElementById('who-wins');
const differentChoices = document.querySelectorAll('button');

let youPick
let computerPicks
let result

differentChoices.forEach(differentChoice => differentChoice.addEventListener('click', (e) => {
    youPick = e.target.id
    youPickShow.innerHTML = youPick
    generateComputerPicks()
    calculateResult ()
}))

function generateComputerPicks () {
    const anyNumber = Math.floor(Math.random () * differentChoices.length) + 1
    
    if (anyNumber === 1) {
        computerPicks = 'rock'
    }

    if (anyNumber === 2) {
        computerPicks = 'paper'
    }

    if (anyNumber === 3) {
        computerPicks = 'scissors'
    }
    computerPicksShow.innerHTML = computerPicks
}


function win (youPick, computerPicks) {
    userScore ++;
    userScoreShow.innerHTML = userScore;
    computerScoreShow.innerHTML = computerScore;
}

function lose (youPick, computerPicks) {
    computerScore ++;
    userScoreShow.innerHTML = userScore;
    computerScoreShow.innerHTML = computerScore;
}

function calculateResult () {

    if (computerPicks === youPick) {
        result = 'It\'s a draw! &#128580;'
    }

    if (computerPicks === 'rock' && youPick === 'scissors') {
        result = 'You lose! &#128531;'
        lose (youPick, computerPicks);
    }

    if (computerPicks === 'rock' && youPick === 'paper') {
        result = 'You win! &#128515'
        win (youPick, computerPicks);
    }

    if (computerPicks === 'paper' && youPick === 'scissors') {
        result = 'You win! &#128515'
        win (youPick, computerPicks);
    }

    if (computerPicks === 'paper' && youPick === 'rock') {
        result = 'You lose! &#128531;'
        lose (youPick, computerPicks);
    }

    if (computerPicks === 'scissors' && youPick === 'rock') {
        result = 'You win! &#128515'
        win (youPick, computerPicks);
    }

    if (computerPicks === 'scissors' && youPick === 'paper') {
        result = 'You lose! &#128531;'
        lose (youPick, computerPicks);
    }

    whoWinsShow.innerHTML = result
}

let computerScore = 0;
let userScore = 0;
let userScoreShow = document.getElementById('user-score');
let computerScoreShow = document.getElementById('computer-score');
let scoreBoardShow = document.querySelector('counter-display');

/** Announce the winner using a Modal box (When a players scores 3 points the game ends and the winner is declared) */

const endModal = getElementsByClassName('modal')[0];
const modalHeader = getElementsByClassName('modal-header')[0];
const modalContent = getElementsByClassName('modal-content')[0];

function winner () {
    if (userScore === 3) {
        endModal.style.display = 'block';
        modalHeader.text.content = 'You won, matey!';
        modalContent.text.content = `Your score: ${userScore} / Redbear's Score: ${computersScore}`;
    } else if (computerScore === 3) {
        endModal.style.display = 'block';
        modalHeader.text.content = 'You lost matey, but you can try again!';
        modalContent.text.content = `Your score: ${userScore} / Redbear's Score: ${computersScore}`;
    }
}