function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let picked = options[Math.floor(Math.random() * options.length)];
    console.log("Computer picked " + picked);
    return picked;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerPick = prompt("What do you pick?", "Rock");
        console.log("Player picked " + playerPick);
        let computerPick = computerPlay();
        playRound(playerPick, computerPick);
    }

    if (playerScore > computerScore) {
        console.log("You won with a score of " + playerScore.toString());
    } else if (computerScore > playerScore) {
        console.log("You lost! The computer had a score of " + computerScore.toString());
    } else {
        console.log("You tied! Both you and the computer had a score of " + playerScore.toString());
    }

}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            printWin("paper", "rock");
        } else if (playerSelection === "scissors") {
            printLoss("rock", "scissors");
        } else {
            printTie();
        }
        return;
    }

    if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            printWin("scissors", "paper");
        } else if (playerSelection === "rock") {
            printLoss("paper", "rock");
        } else {
            printTie();
        }
        return;
    }

    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            printWin("rock", "scissors");
        } else if (playerSelection === "paper") {
            printLoss("scissors", "paper");
        } else {
            printTie();
        }
        return;
    }
}

function printWin(winner, loser) {
    console.log("You won! " + winner + " beats " + loser);
    playerScore++;
}

function printLoss(winner, loser) {
    console.log("You lost! " + winner + " beats " + loser);
    computerScore++;
}

function printTie() {
    console.log("You tied.");
}


let playerScore = 0;
let computerScore = 0;
game();