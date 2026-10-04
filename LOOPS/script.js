// for(let i=0; i<5; i++)
// {
//     console.log("Saurabh Singh");
// }
// while and do while are same as c and C++


// for of loop it will print all the characters in the string
// let str="Saurabh Singh";
// for(let val of str)
// {
//     console.log(val);
// }


// for in loop it is mainly used in objects it will access the keys of object and we can print the values to.
let student={
    name:"Sahil",
    rollNo:71,
    isPass: true,
};

for(let key in student)
{
    console.log(key, student[key]);
}

// Practice Ques

let num=25;

let userNumber= prompt("Enter number between 0 to 100");

while(num!= userNumber)
{
    userNumber=prompt("You Entered the wrong number Try again");
}

console.log("Congratulation you entered write number");