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

export {playRound}