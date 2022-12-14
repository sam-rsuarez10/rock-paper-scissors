import {getComputerChoice, getPlayerSelection} from './computer-player-selections.js'
import {playRound} from './play-round.js';

const messageBox = document.querySelector("#message-box");
messageBox.textContent = '';

function game(event) {
    // player and computer selections
    let player = event.target.textContent.toLowerCase();
    let computer = getComputerChoice();
    playRound(player, computer, messageBox);
    /*const rounds = 1;
    let scoreboard = { user: 0, computer: 0 };
    let round = 1;
    while(round <= rounds){
        console.log('\n\n');
        console.log(`Round ${round}`);
        // Make selections
        let player = event.target.textContent.toLowerCase();
        let computer = getComputerChoice();
        // play game
        let winner = playRound(player, computer, messageBox);
        if (winner == 'w') {
            // User won
            scoreboard.user += 1;
        } else if (winner == 'l') {
            // User lose
            scoreboard.computer += 1;
        } else {
            // Draw, repeat round
            round--;
        }
        console.log(scoreboard);
        round++;
    }

    // decide overall winner
    if (scoreboard.user > scoreboard.computer) {
        messageBox.classList.add("alert-success");
        messageBox.classList.remove("alert-danger");
        messageBox.textContent = 'Congrats!!! You won it all :D'; 
    } else {
        messageBox.classList.remove("alert-success");
        messageBox.classList.add("alert-danger");
        messageBox.textContent = 'Sorry you lose :(, try again';
    }*/
}


// capture buttons
const buttons = document.querySelectorAll('button');
buttons.forEach (button => {
    button.addEventListener('click', game);
})
