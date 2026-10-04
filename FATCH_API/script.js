// Fatch returns promise so we can handle it using then,catch and async,await.

// Using then and catch.
let response=fetch('https://jsonplaceholder.typicode.com/todos/1');
response
.then(function(rawData){
    return rawData.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});

// using async await

async function getData() {
    let res=await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let data=await res.json();
    console.log(data[0].id);
}
getData();