function getComputerChoice() {
    /* Returns randomly rock, paper or scissors */
    const options = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function getPlayerSelection() {
    /* Take rock, paper, scissors input from input and return it */
    let is_valid = false;
    let userInput = '';
    let lowerInput = '';
    while(!is_valid){
        userInput = prompt("Type 'rock', 'paper' or 'scissors': ")
        lowerInput = userInput.toLowerCase();

        if(lowerInput != 'rock' && lowerInput != 'paper' && lowerInput != 'scissors') {
            alert("Type a valid input");
        } else {
            is_valid = true;
        }
    }
    return lowerInput;
}

function playRound(playerSelection, computerSelection) {
    /* Given player and computer selections, performs logic to
    decide winner */

    /* Base Cases: 
        -rock beats scissors 
        -scissors beats paper
        -paper beats rock */

    if ((playerSelection == 'rock' && computerSelection == 'scissors') 
        || (playerSelection == 'scissors' && computerSelection == 'paper')
        || (playerSelection == 'paper' && computerSelection) == 'rock'){
        // win scenario
        return `You won :D ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == computerSelection){
        // draw scenario
        return 'Draw :/';
    } else {
        // lose scenario
        return `You lose :( ${computerSelection} beats ${playerSelection}`
    }
}

const player = getPlayerSelection();
const computer = getComputerChoice();
console.log(playRound(player, computer));