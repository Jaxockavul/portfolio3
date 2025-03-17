// let count = 0;
// let minus = document.getElementById("minus")
// let rest = document.getElementById("rest")
// let plus = document.getElementById("plus")
// let label = document.getElementById("label")
// minus.onclick = function(){
//     if (count <= 0){
//         return
//     }else {
//         count--
//     }
//     label.innerHTML = count;
// }   

// rest.onclick = function(){
//     count = 0;
//     label.innerHTML = count;
// }

// plus.onclick = function(){
//     count += 1;
//     label.innerHTML = count;
// }
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.innerHTML  = `PLAYER: ${playerChoice}`;
    computerDisplay.innerHTML    = `Computer: ${computerChoice}`;
    resultDisplay.innerHTML  = result;

}
