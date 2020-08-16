//score variables
let p1Score = 0;
let p2Score = 0;

// who's turn is it? 
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

const rollBtn = document.getElementById("roll").addEventListener('click', rollDice);
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener('click', resetGame);

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
            message.style.color = "#1bbe8d";
            message.textContent = "Player 1 Wins!";
        } else {
            message.style.color = "#1bbe8d";
            message.textContent = "Player 2 Wins!";
        }
    }
}


//reset the game!
function resetGame(){
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
}

// need to forcefully end the game as soon as someone wins
