import {getComputerChoice, getPlayerSelection} from './computer-player-selections.js'
import {playRound} from './play-round.js';

const messageBox = document.querySelector("#message-box");
messageBox.textContent = '';

const beginGameButton = document.querySelector("#begin-game");
const optionsDiv = document.querySelector(".options");
let rounds = 0;

beginGameButton.addEventListener("click", (event) => {
    const beginBtn = event.target;
    beginBtn.style.display = 'none';

    // Create input group for number of rounds
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input-group", "mb-3");

    const inputField = document.createElement("input");
    inputField.placeholder = "Type number of rounds";
    inputField.classList.add("form-control");
    inputField.setAttribute("type", "number");

    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Confirm";
    confirmBtn.classList.add("btn", "btn-outline-success");
    confirmBtn.setAttribute("type", "button");

    // apppend both input and confirm button to input div
    inputDiv.appendChild(inputField);
    inputDiv.appendChild(confirmBtn);

    // append input div to options div
    optionsDiv.appendChild(inputDiv);
    optionsDiv.classList.add("col-lg-4", "offset-md-4");

    confirmBtn.addEventListener("click", () => {
        if(inputField.value && inputField.value != 0){
            // input is valid
            console.log(parseInt(inputField.value));
        } else {
            inputField.value = null;
            alert("Please, type valid number");
        }
    });

});

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
/*const buttons = document.querySelectorAll('button');
buttons.forEach (button => {
    button.addEventListener('click', game);
})*/
