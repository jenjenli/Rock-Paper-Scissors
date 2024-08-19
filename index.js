const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
console.clear();

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerChoice=== computerChoice){
        result = "IT'S A TIE!";

    }
    else{
        if ((playerChoice === "rock" && computerChoice === "scissors")||(playerChoice ==="paper" && computerChoice ==="rock")||(playerChoice=== "scissors" && computerChoice === "paper") ){
            result = "PLAYER WINS!";
        }
        else{
            result = "COMPUTER WINS!"
        }
    }
    playerDisplay.textContent = 'PLAYER: ' + playerChoice;
    computerDisplay.textContent = 'COMPUTER: ' +computerChoice;
    resultDisplay.textContent = result;

}
