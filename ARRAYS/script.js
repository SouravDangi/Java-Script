let city = ["India", "Russia", "China", "Amrica"];

let marks=[93, 87, 79, 91];

let info=["Saurabh", 23, "Dehradun"];

console.log(marks);

console.log("\n");

for(let i of city)
{
    console.log(i);
}

console.log("\n");

for(let i=0; i<info.length; i++)
{
    console.log(info[i]);
}

console.log("\n");

// Practice Ques 1
let marksOfStudents=[85, 97, 44, 37, 76, 60];
let sum=0;
for(let i of marksOfStudents)
{
    sum+=i;
}
console.log(`Average marks is=${sum/marksOfStudents.length}`);

console.log("\n");

// Practice Ques 2
let price=[250, 645, 300, 900, 50];
for(let i=0; i<price.length; i++)
{
    price[i]=price[i]/10;
    console.log(`Value after offer is ${price[i]}`);
}
