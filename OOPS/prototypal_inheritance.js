// ptototypal inheritance means object can inharit methods and properties form another object through its prototype.

let a={
    name:"Saurabh",
    printName: function()
    {
        console.log(this.name);
    }
}
a.printName();
// yha pe naya object bnaya (b) Object.create ki help se or usme a ko inharit kra diya.
let b=Object.create(a);
b.printName();