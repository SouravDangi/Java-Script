// global scope.
console.log(this);

// function scope.
function abcd(){
    console.log(this);
}
abcd();


// method scope.
let obj={
    name:"Saurabh",
    sayName:function(){
        console.log(this.name);
    },
}
obj.sayName();


// event handler (value of this will be h1).
// means this ki value wo hoti h jispe eventListner lga ho.
let h1=document.querySelector("h1");
h1.addEventListener("click", function(){
    console.log(this.style.color="red");
});


// In a JavaScript class, this refers to the object (instance) created when you use the new keyword.

// here this==std1.
class student{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    introduction() {
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
    }
}

let std1= new student("Saurabh", 23);
std1.introduction();