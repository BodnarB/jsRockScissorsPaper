const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const gameText = document.querySelector(".js-game-text")
const options = ["rock", "paper", "scissors"]

let player
let computer
let result

rock.addEventListener("click", function () { player = "rock", start() })
paper.addEventListener("click", function () { player = "paper", start() })
scissors.addEventListener("click", function () { player = "scissors", start() })

function start() {
    computer = options[Math.floor(Math.random() * options.length)]
    if (player === computer) {
        result = "Draw"
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
    gameText.innerHTML = `<p> Player's choice: ${player}. The choice of the computer: ${computer}. ${result}</p>`
}