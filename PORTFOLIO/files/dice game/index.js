function Render() {
    let myin = document.getElementById("myin").value;
    let myresult = document.getElementById("myresult");
    let myimages = document.getElementById("myimages");
    let values = [];
    let images = [];

    for (let i = 0; i < myin; i++) {
        let value = Math.floor(Math.random() * 6) + 1;
        //console.log(value);
        values.push(value);
        images.push(`<img src="images/dice${value}.png">`);
    }
    myresult.textContent = `Dice:- ${values.join(`, `)}`;
    myimages.innerHTML = images.join(` `);
}
 