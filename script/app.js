const options = ["rock", "paper", "scissors"]
let player
let computer
let result

document.querySelector(".rock").addEventListener("click", function () { player = "rock", start() })
document.querySelector(".paper").addEventListener("click", function () { player = "paper", start() })
document.querySelector(".scissors").addEventListener("click", function () { player = "scissors", start() })

function start() {
    computer = options[Math.floor(Math.random() * options.length)]
    if (player === computer) {
        result = "Draw!"
    }
    else if (player === "rock" && computer === "paper") {
        result = "You lost!"
    }
    else if (player === "paper" && computer === "scissors") {
        result = "You lost!"
    }
    else if (player === "scissors" && computer === "rock") {
        result = "You lost!"
    }
    else {
        result = "You won!"
    }
    document.querySelector(".js-game-text").innerHTML = `<p class="chosen">Player's choice: ${player}<img class="sm-icon" src="./images/${player}.png"></p> 
    <p class="chosen">The choice of the computer: ${computer}<img class="sm-icon" src="./images/${computer}.png"></p><p class="result">${result}</p>`
}