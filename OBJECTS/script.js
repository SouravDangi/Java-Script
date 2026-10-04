// let student={
//     name: "Saurabh Singh",
//     age: 23,
//     cgpa: 7.05,
//     ispass: true
// };
// //let newObj=student; // passes the refrence
// let newObj={...student};  // copy value

// console.log(student);

// console.log(student.age);
// student.age=student.age+1;
// console.log(student.age);

// Nasted Objects
// ...(Spread Operator) do not copy value of child object it passes the refrence of child and copy value of parent
// to copy nested objects we use deep copy technique using JSONs
let obj={
    name: "Saurabh Singh",
    age: 23,
    address: {
        city:"Dehradun",
    },
};

let newObj=JSON.parse(JSON.stringify(obj));
console.log(newObj);
// using stringify object converted into string and after using parse it again became object