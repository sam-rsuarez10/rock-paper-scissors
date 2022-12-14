import { updateMessage } from "./update-message.js";


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
        updateMessage(true, false, false, displayBox);
        displayBox.textContent = `You won :D ${playerSelection} beats ${computerSelection}`; 
        return 'w';
    } else if (playerSelection == computerSelection){
        // draw scenario
        updateMessage(false, true, false, displayBox);
        displayBox.textContent = 'Draw :/';
        return 'd';
    } else {
        // lose scenario
        updateMessage(false, false, true, displayBox);
        displayBox.textContent = `You lose :( ${computerSelection} beats ${playerSelection}`;
        return 'l';
    }
}

export {playRound}