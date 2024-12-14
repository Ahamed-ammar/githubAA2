const Allchoices = ["Rock", "Paper", "Scissor"];

let playerChoice = document.getElementById("playerChoice");
let computerChoice = document.getElementById("computerChoice");
let currentplayer = document.getElementById("currentplayer");
let currentcomputer = document.getElementById("currentcomputer");
let resultDisplay = document.getElementById("resultDisplay");
let scoreComputer = document.getElementById("scoreComputer");
let scorePlayer = document.getElementById("scorePlayer");
let winCount = 0, loseCount = 0;
function GameStarts(element){
    let Result = "";

    console.log(element);

    currentplayer.textContent = element;
    let com = Allchoices[Math.floor(Math.random() * 3)];;
    currentcomputer.textContent = com;
    scorePlayer.classList.add("youwin");
    scoreComputer.classList.add("youlose");

    if(element === com){
        Result = "It's Tie";
    }
    else{
        switch(com){
            case "Rock":
                Result = (element === "Paper") ? "You Win" : "You Lose";
                break;
            case "Paper":
                Result = (element === 'Scissor') ? "You Win" : "You Lose";
                break;
            case "Scissor":
                Result = (element === 'Rock') ? "You Win" : "You Lose";
                break;
        }
    }
    console.log(Result);
    resultDisplay.classList.remove("youwin", "youlose", "youtie");
    switch(Result){
        case "You Win":
            winCount++;
            resultDisplay.classList.add("youwin");
            resultDisplay.textContent = Result;
            break;
        case "You Lose":
            loseCount++;
            resultDisplay.classList.add("youlose");
            resultDisplay.textContent = Result;
            break;
        case "It's Tie":
            resultDisplay.classList.add("youtie");
            resultDisplay.textContent = Result;
            break;
    }
    scorePlayer.textContent = winCount;
    scoreComputer.textContent = loseCount;
    
}