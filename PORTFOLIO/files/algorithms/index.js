function password(lenth,upper,lower,num){
let upperalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let loweralpha = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let symbols = "@!%$^&*?><{}.,;:/+-";

let allowedchar = "";
let password = "";

allowedchar += upper ? upperalpha : "";
allowedchar += lower ? loweralpha : "";
allowedchar += num ? number : "";
allowedchar += symbols ? symbols : "";

for(let i=0;i<lenth;i++){
    let randomindex = Math.floor(Math.random() * allowedchar.length);
    password += allowedchar[randomindex];
}
    return password;
}
let passwordlen = 12;
let upper = true;
let lower = true;
let num = true;
let nsymbols = true;
const newpassword = password(passwordlen,upper,lower,num);
console.log(`the password is: ${newpassword}`);