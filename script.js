//score variables
let p1Score = 0;
let p2Score = 0;

// whose turn is it? 
let currentTurn = true;
    // p1 true
    // p2 false

//DOM variables

const currentPlayer = document.getElementById("player");
const message = document.querySelector(".message");

const p1ScoreDisplay = document.getElementById("p1Score");
const p2ScoreDisplay = document.getElementById("p2Score");
const p1Dice = document.getElementById('p1Dice');
const p2Dice = document.getElementById('p2Dice'); 

const rollBtn = document.getElementById("roll");
const resetBtn = document.getElementById("reset");
const startBtn = document.querySelector('.dice-btn');

//set event listeners
resetBtn.addEventListener('click', resetGame);
rollBtn.addEventListener('click', rollDice);
startBtn.addEventListener('click', startGame);

function startGame() {
    //random number generator
        //math.floor random * 20 or whatever
    //need to unhide all the rest of the game
    //hide this modal
    //then we can wait for the event listeners on the other buttons
}

//roll the dice when button is clicked
function rollDice(){
    //display reset game as soon as its clicked
    resetBtn.style.display = "inline-block";

    //roll the dice!
    let currentRoll = Math.floor((Math.random() * 6) + 1);
    
    //check and display scores/rolls
    if(currentTurn) {
        p1Score += currentRoll;

        //display things!
        p1Dice.textContent = currentRoll;
        p1ScoreDisplay.textContent = p1Score;
        currentPlayer.textContent = 1;
        checkWinner(p1Score);

        currentTurn = false;

    } else {
        p2Score += currentRoll;
        p2Dice.textContent = currentRoll;
        p2ScoreDisplay.textContent = p2Score;
        currentPlayer.textContent = 2;
        checkWinner(p2Score);

        currentTurn = true;
    }

}

function checkWinner(score) {
    //checking current player's score against the win condition
    if(score >= 20){
        if(currentTurn){
            updateWinner(1);
        } else {
            updateWinner(2);
        }
    }
}

function updateWinner(player) {
    message.style.color = "#1bbe8d";
    message.textContent = "Player " + player + " Wins!";
    rollBtn.style.display = "none";
    console.log("a player has won!");
}

//reset the game!
function resetGame(){

    /* this keeps breaking - some value somewhere isn't getting truly reset, causing the game to be over the first roll

        scoreDisplay(p1Score, p1Dice, p1ScoreDisplay);
        scoreDisplay(p2Score, p2Dice, p2ScoreDisplay);
    */
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    p1Dice.textContent = '-';
    p2Dice.textContent = '-';

    currentPlayer.textContent = 1;
    message.style.color = 'black';
    message.innerHTML = 'Player <span id="player">1</span> Turn';
    resetBtn.style.display = "none";
    rollBtn.style.display = "inline-block";
}

/*
function scoreDisplay(player, dice, score) {
    player = 0;
    dice.textContent = '-';
    score.textContent = 0;
    console.log(player, dice, score);
}
*/