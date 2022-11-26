function getComputerChoice() {
    /* Returns randomly rock, paper or scissors */
    const options = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

console.log(getComputerChoice());