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

export {getComputerChoice, getPlayerSelection}