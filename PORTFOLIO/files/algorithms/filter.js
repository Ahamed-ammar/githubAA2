let ages = [1,32, 12, 45, 21, 14, 45, 62, 12,100];
let Adults = ages.filter(FintAdults);
console.log(Adults);
function FintAdults(element){
    return element >=18;
}

let marks = [99, 100, 84, 53, 46, 44];
let passMarks = marks.filter(function(element){
    return element >= 50;
});
//console.log(`these are the pass marks`);
console.log(`These are the pass marks:- ${passMarks}`);

let greatestMarks = marks.reduce(function(accumulater, element){
    return Math.max(accumulater, element);
});
console.log(`the greatest mark of this student:- ${greatestMarks}`);

let converted = marks.map(function(element){
    return element/2;
});
console.log(`These are marks converted into 50:- ${converted}`);

let total = marks.reduce(function(accumulater, element){
    return accumulater + element;
});
console.log(`this is the total of student:- ${total}`);

let hello = (name)=>console.log(`hello ${name}`);

let total2 = marks.reduce((accumulater, element) =>  accumulater + element);   
console.log(total);

let prices = [20, 30, 40, 50, 100];
let above20 = prices.filter((element) => element>20);
console.log(above20);

let total3 = above20.reduce((accumulater, element) => accumulater + element);
console.log(total3);

let gst = prices.map((element) => element + 40);
console.log(`it's the privies one:- ${prices}`);
console.log(`it's the nowest one:- ${gst}`);

const student1 = {
    name: "AMMAR",
    id: "bcb005",
    Smarks: m = [50, 60, 40, 30, 60],
    total4: m.reduce((accumulater, element) => accumulater + element),
}
console.log(student1.total4);
console.log(`these are marks:- ${student1.Smarks}`);
 
function student(name, id, mark7, total7){
    this.name = name;
    this.id = id;
    this.mark7 = mark7;
    this.total7 = total7;
    this.miss = function(){
         console.log(this.total7 - this.mark7);
    }
}
let student5 = new student("AMMAR", "BCB005", 343, 500);
console.log(student5.name);
console.log(student5.id);
console.log(student5.mark7);
console.log(student5.total7);
student5.miss();

class prdouct{
    constructor(name, price, gst){
        this.name = name;
        this.price = price; 
        this.gst = gst;
    }
    display(){
        console.log(`Product Type:- ${this.name}`);
        console.log(`price of the product:- ${this.price}`);
        console.log(`total price(with gst):- ${this.calculate(this.gst)}`);
    }
    calculate(gst){
        return this.price + (this.price * gst);
    }
}
let prdouct1 = new prdouct("Apple", 120, 8);
prdouct1.display();


//_______________________OBJECTS, CLASS, CONSTRACTOR_________________________
class phone{
    constructor(name, model, imea, storage, ram){
        this.name = name;
        this.model = model;
        this.imea = imea;
        this.storage = storage;
        this.ram  = ram;
    }
    display(){
        console.log(`Name of the phone:- ${this.name}`);
        console.log(`Name of the phone:- ${this.model}`);
        console.log(`Name of the phone:- ${this.imea}`);
        console.log(`Name of the phone:- ${this.storage}`);
        console.log(`Name of the phone:- ${this.ram}`);
        console.log(`_______|_____|_____|_____`);
    }
}
let phone11 = new phone("iphone", "16Pro", 34125, 512, 16);
let phone2 = new phone("samsung", "S24 ULTRA", 34125, "1tb", 32);
let phone3 = new phone("Redmi", "12pro", 57985, "512", 16);
phone11.display();
phone2.display();
phone3.display();
//________________________________, Inheritance,__________________________________

class Circle{
     Pi = 3.1415;
    constructor(radius){
        this.radius = radius;
    }
    circumference(){
        return (2*this.Pi*this.radius).toFixed(2);
    }
    area(){
        return (2*this.Pi*this.radius*this.radius).toFixed(2);
    }
    // display(){
    //     console.log(`this the ${this.name}`)
    //     console.log(`Area of the ${this.name}:- ${this.area()}`);
    //     console.log(`Area of the ${this.name}:- ${this.circumference()}`);
    // }
}
class operation extends Circle{
    display(){
        //console.log(this.name);
        console.log(this.area());
        console.log(this.circumference());
    }
}
let Shape = new operation(10);
Shape.display();
//_______________________________SUPER______________________________________
class Newphone{
    constructor(name, model, storage){
        this.name = name;
        this.model = model;
        this.storage = storage;
    }
    display1(){
        console.log(`You select ${this.name} ${this.model}, the phone have ${this.storage}.`);
    }
    
}
class iphone extends Newphone{
    constructor(name, model, storage, expence){
        super(name, model, storage);
        //this.name = name;
        this.expence = expence;
    }
    display(){
        console.log(`this mobile have speceliset in ${this.expence}`);
    }
}
class samsung24 extends Newphone{
    constructor(name, model,storage, camera){
        super(name, model, storage);
        this.camera = camera;
    }
    display(){
        console.log(`this mobile have speceliset in ${this.camera}`);
    }
}

let phone1 = new iphone("iphone", "16Pro",512,"Cinematic Camera");
console.log(phone1.display1());
console.log(phone1.display());
//____________________________Getters and Setters__________________________
class Rectancle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newW){
        if(newW > 0){
            this._width = newW;
        }
        else{
            console.log("you must enter in positive number");
        }
    }
    set height(newh){
        if(newh > 0){
            this._height = newh;
        }
        else{
            console.error("you must enter in positive number");
        }
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    area(){
        return this._width * this._height;
    }
    display(){
        console.log(`this Rectangle Width is:- ${this._width}`);
        console.log(`this Rectangle Height is:- ${this.height}`);
        console.log(`this Rectangle Area is:- ${this.area()}`);
    }
}

let Rectangle1 = new Rectancle("", 4);
Rectancle.width = "ammar";
Rectangle1.display();

class person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirst){
        if(typeof newFirst === "string"){
            this._firstName = newFirst;
        }
        else{
            console.log(`You must enter In word`);
        }
    }
    get firstName(){
        return this._firstName;
    }
    // display(){
    //     console.log(Person1._firstName);
    // }
}
let Person1 = new person(12, "Ahamed", 18);
console.log(Person1.firstName);
//_______________________________Disstructuring___________________________
//For Arrays
let a = ["Red", "White", "Yellow", "Orange", "Green"];
let [first, second, thirt, ...Extra] = a;
console.log(Extra);
//For Objects
let CAR1 = {
    name: "Ford",
    model: "Mustang",
    price: "$1,20,00,000",
    taxINT: "$1,00,000",
    taxUSA: "$2,00,000",
    taxUK: "$3,00,000",
}
let CAR2 = {
    name: "Porche",
    model: "911",
    price: "$3,20,00,000",
    taxINT: "$1,00,000",
    taxUSA: "$2,00,000",
    taxUK: "$3,00,000",
}
let{name, model1, price, ...tax} = CAR1;
console.log(tax);
//________________________________Nested Objects___________________________
let person4 = {
    name: "Ahamed Ammar",
    Mobile: "8122613274",
    Roll: "Student",
    Address : {
        Street:"53/3, ParasuramaPuram North Street",
        Taluk: "Kadayanallur",
        District: "Tenkasi",
    }
}
for(let member in person4.Address){
    console.log(person4.Address[member]);
}