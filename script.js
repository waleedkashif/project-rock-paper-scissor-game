function getComputerChoice(){
    let options = ["Rock","Paper","Scissor"]
    selectedChoice = options[Math.floor(3 * Math.random())];
    return selectedChoice;
    }

function getPlayerChoice(){
    const playerSelection = prompt("Choose Rock, Paper or Scissor!");
    return playerSelection;
    }

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (playerChoice === "rock"){
        switch(computerChoice){
            case "rock":
                return "It's a tie";
            case "scissor":
                return "You win! Rock beats Scissor";
            case "paper":
                return "You Lose! Paper beats Rock";
        }
    }
    if (playerChoice === "scissor") {
        switch (computerChoice) {
            case "rock":
                return "You Lose! Rock beats Scissor";
            case "scissor":
                return "It's a tie";
            case "paper":
                return "You win! Scissor beats rock";
        }
    }
    if (playerChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                return "You win! Paper beats Rock";
            case "scissor":
                return "You Lose! Scissor beats paper";
            case "paper":
                return "It's a tie";
        }
    }
}

function game(){
    let result;
    let player = 0;
    let computer = 0;
    for (let i = 0; i < 5; i++) {
        playerChoice = getPlayerChoice();
        console.log(playerChoice);
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        result = playRound(playerChoice,computerChoice);
        result = result.slice(4,7)
        if (result == "win"){
            player = ++player;}
        if (result == "Los"){
            computer = ++computer;}
     }
     console.log("Player: ")
     console.log(player);
     console.log("Computer")
     console.log(computer);
}

game();