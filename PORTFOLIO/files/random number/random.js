let Roll = document.getElementById("mybtn");
let label = document.getElementById("myl");
let min = window.prompt('Enter your minimum value');
let max = window.prompt('Enter your maximum value');;
let randomNum;
Roll.onclick = function(){
    min = Number(min);
    max = Number(max);
    randomNum = Math.floor(Math.random()*(max-min)+ min);
    label.textContent = randomNum;
}