let num = [1, 2, 3, 4, 5];

let fruits = ["apple", "orange", "banana",];
num.forEach(PlusTwo);
num.forEach(display);
function display(element){
    console.log(element);
}

function touble(element, index, array){
    array[index] = element*2;
}

function triple(element, index, array){
    array[index] = element*3;
}

function squre(element, index, array){
    array[index] = Math.pow(element,2);
}

function UpperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function LowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function Captalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase()+element.slice(1);
}
let a = [1, 2, 3, 4, 5];

function PlusTwo(element, index, array){
    return array[index] = element + 2;
}
