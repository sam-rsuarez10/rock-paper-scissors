import {getComputerChoice, getPlayerSelection} from './computer-player-selections.js'
import {playRound} from './single-game.js';

const player = getPlayerSelection();
const computer = getComputerChoice();
console.log(playRound(player, computer));