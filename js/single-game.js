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
        console.log(`You won :D ${playerSelection} beats ${computerSelection}`)
        return 'w';
    } else if (playerSelection == computerSelection){
        // draw scenario
        console.log('Draw :/')
        return 'd';
    } else {
        // lose scenario
        console.log(`You lose :( ${computerSelection} beats ${playerSelection}`)
        return 'l';
    }
}

export {playRound}