// Call Apply Bind
// Using these we can set the value of this while calling a function.

// Call
let obj={
    name: "Saurabh",
    age: 23,
};

function abcd(a, b, c)
{
    console.log(this.name);
    console.log(a, b, c);
}
abcd.call(obj, 1, 2, 3);
// Call will not work in arrow function.


// The only difference between call and Apply is (Call arguments alag alag pass kro). (Apply arguments array ke andr pass kro).
// but parameter m one by one hi lena donu m.


// Apply
let obj2={
    name: "Sumit",
    age: 20,
};

function asdf(a, b, c)
{
    console.log(this.name);
    console.log(a, b, c);
}
asdf.apply(obj2, [1, 2, 3]);


// bind
let obj3={
    name: "Prachi",
    age: 17,
};

function dfgh(a, b, c){
    console.log(this.name);
    console.log(a, b, c);
}
let fun=dfgh.bind(obj3, 1, 2, 3);
fun();
// bind creates a copy of function in which this refers to object.