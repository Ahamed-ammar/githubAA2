const myin = document.getElementById("myin");
const inc = document.getElementById("inc");
const inf = document.getElementById("inf");
const ans = document.getElementById("ans");
let temp;
function convert(){
    if(inc.checked){
        temp = Number(myin.value);
        temp = temp*9/5 + 32;
        ans.textContent = temp.toFixed(1) + "℉";
    }
    else if(inf.checked){
        temp = Number(myin.value);
        temp = (temp-32)*(5/9) ;
        ans.textContent = temp.toFixed(1) + "℃";
    }
    else{
        ans.textContent = "select a Unit";
    }
}