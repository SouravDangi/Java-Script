// Constructor function

function CreatePencil(name, price, text){
    this.name=name;
    this.price=price;
    this.text=text;
    console.log(this.name,  this.price );
    console.log(this.compneyName);

    this.writeText();
}
CreatePencil.prototype.compneyName="Aura Pencil"
// Prototype 
// Prototype is a mechanism in js by which we share object method and properties, So we don't have to create a different copy for 
// every object.

CreatePencil.prototype.writeText= function(){
    let h2=document.createElement("h2");
    h2.textContent=this.text;
    h2.style.color="red";
    document.body.append(h2);
}

let pencil1=new CreatePencil("Natraj", 10, "Hi bro how are you?");
let pencil2=new CreatePencil("Doms", 10, "I am good bro.");

// Class

class Student{
    constructor(name, rollNo, age){
        this.name=name;
        this.rollNo=rollNo;
        this.age=age;
    }
    printDetails(){
        console.log(`Name is ${this.name}, Roll No. is ${this.rollNo}, Age is ${this.age}.`);
    }
};

let std1=new Student("Saurabh", 59, 23);
std1.printDetails(); 