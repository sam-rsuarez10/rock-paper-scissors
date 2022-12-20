import {getComputerChoice, getPlayerSelection} from './computer-player-selections.js'
import {playRound} from './play-round.js';
import { updateMessage } from './update-message.js';
import { createGameBtn } from './create-game-btns.js';

const messageBox = document.querySelector("#message-box");
messageBox.textContent = '';

const scoreboardBox = document.querySelector('#scoreboard-box');
scoreboardBox.textContent = '';

const beginGameButton = document.querySelector("#begin-game");
const optionsDiv = document.querySelector(".options");
let winningPoint = 0;
let scoreboard = { user: 0, computer: 0 };

beginGameButton.addEventListener("click", (event) => {
    const beginBtn = event.target;
    beginBtn.style.display = 'none';

    // Create input group for number of rounds
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input-group", "mb-3");

    const inputField = document.createElement("input");
    inputField.placeholder = "Number of points to win";
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
        if(inputField.value && inputField.value != 0 && inputField.value <= 10){
            // input is valid
            // remove any previous error message
            messageBox.classList.remove("alert-danger");
            messageBox.textContent = "";

            winningPoint = inputField.value;
            inputDiv.style.display = "none"; // remove rounds input
            // create rock, paper, scissors buttons
            const buttons = createGameBtn(optionsDiv);
            scoreboardBox.classList.add("alert-info");
            scoreboardBox.textContent = `you: ${scoreboard.user}   computer: ${scoreboard.computer}`
            buttons.forEach(button => button.addEventListener("click", game));
        } else {
            inputField.value = null;
            updateMessage(false, false, true, messageBox);
            messageBox.textContent = "Please, type a valid number";
        }
    });

});

function game(event) {
    /* logic to continue game until player or 
    computer reach the number of points to win */
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
    } 

    // update scoreboard
    scoreboardBox.textContent = `you: ${scoreboard.user}   computer: ${scoreboard.computer}`

    // decide overall winner
    if (scoreboard.user == winningPoint) {
        updateMessage(true, false, false, messageBox);
        messageBox.textContent = 'Congrats!!! You won it all :D'; 
    } else if(scoreboard.computer == winningPoint){
        updateMessage(false, false, true, messageBox);
        messageBox.textContent = 'Sorry you lose :(, try again';
    }
}


// capture buttons
/*const buttons = document.querySelectorAll('button');
buttons.forEach (button => {
    button.addEventListener('click', game);
})*/
