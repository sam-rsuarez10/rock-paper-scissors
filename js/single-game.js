function playRound(playerSelection, computerSelection, displayBox) {
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
        displayBox.classList.add("alert-success");
        displayBox.classList.remove("alert-danger");
        displayBox.classList.remove("alert-warning");
        displayBox.textContent = `You won :D ${playerSelection} beats ${computerSelection}`; 
        return 'w';
    } else if (playerSelection == computerSelection){
        // draw scenario
        displayBox.classList.remove("alert-success");
        displayBox.classList.add("alert-warning");
        displayBox.classList.remove("alert-danger");
        displayBox.textContent = 'Draw :/';
        return 'd';
    } else {
        // lose scenario
        displayBox.classList.remove("alert-success");
        displayBox.classList.add("alert-danger");
        displayBox.classList.remove("alert-warning");
        displayBox.textContent = `You lose :( ${computerSelection} beats ${playerSelection}`;
        return 'l';
    }
}

export {playRound}