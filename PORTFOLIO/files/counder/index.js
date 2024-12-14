const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
let count=0;
decrease.onclick = function(){
    count--;
    num.textContent = count;
}
reset.onclick = function(){
    count = 0;
    num.textContent = count;
}
increase.onclick = function(){
    count++;
    num.textContent = count;
}