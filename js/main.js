import {getComputerChoice, getPlayerSelection} from './computer-player-selections.js'
import {playRound} from './single-game.js';


function game(event) {
    console.clear();
    const rounds = 1;
    let scoreboard = { user: 0, computer: 0 };
    let round = 1;
    while(round <= rounds){
        console.log('\n\n');
        console.log(`Round ${round}`);
        // Make selections
        let player = event.target.textContent.toLowerCase();
        let computer = getComputerChoice();
        // play game
        let winner = playRound(player, computer);
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
        console.log('Congrats!!! You won it all :D');
    } else {
        console.log('Sorry you lose :(, try again');
    }
}


// capture buttons
const buttons = document.querySelectorAll('button');
buttons.forEach (button => {
    button.addEventListener('click', game);
})
