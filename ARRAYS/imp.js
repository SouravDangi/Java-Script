// ForEach loop.
let arr=[29, 7, 8, 10, 38];

// arr.forEach(function(val)
// {
//     console.log(val);
// });

console.log("\n");

// map - Use it only when you have to make a new array on the basis of old array.
// let ans=arr.map(function(val)
// {
//     return val/2;
// });
// for(let v of ans)
// {
//     console.log(v);
// }

console.log("\n");

// Filter - It creates array only for those who pass the condition.
let newarr=arr.filter(function(val){
    if (val>=10)
    {
        return val;
    }
});
for(let v of newarr)
{
    console.log(v);
}

console.log("\n");

let newArr=[45, 9, 39, 5, 3];

let ans=newArr.reduce(function(accumulator, val)
{
    return accumulator+val;
},0 ); 
// Starting value of accumulator.
console.log(ans);

let f=newArr.find(function(val){
    return val===39;
});
console.log(f);