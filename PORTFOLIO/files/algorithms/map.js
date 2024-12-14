// let number = [1, 2, 3, 4, 5];
// let dates = ["12-02-2024", "13-03-2024", "15-04-2026", "14-06-2027"];

// let toubleVer = number.map(touble);
// let tripleVer = number.filter(oddNumber);
// let formatedOne = dates.map(formated);

// tripleVer.map(display);


// function display(element){
//     console.log(element);
// }
// function touble(element){
//     return element*2;
// }

// function oddNumber(element){
//     return element%2!=0;
// }

// function formated(element){
//     let parts = element.split("-");
//     return `${parts[0]}/${parts[1]}/${parts[2]}`;
// }

// let myin = document.getElementById("myin").value;
// let myresult = document.getElementById("myresult");
// let formatedTwo = dates.map(formatedNext);

// function formatedNext(element){
//     let parts = element.split("-");
//     return `${parts[0]}/${parts[1]}/${parts[2]}`;
// }

let a = ["12-02-2024", "13-03-2024", "15-04-2026", "14-06-2027"];
let NewOne = a.map(FormatedDate);
NewOne.forEach(display)
function FormatedDate(element, index, array){
    let part = element.split("-");
    return `Formated Date: ${part[0]}/${part[1]}/${part[2]}`;
}
function display(element){
    console.log(element)
}
