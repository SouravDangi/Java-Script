// Promise is an object that is used to handle an operation that may finish successfully or fail in the future.

let pr=new Promise(function(res, rej){
    setTimeout(() => {
        let num=Math.floor(Math.random()*10);
        if (num>5) res(num);
        else rej("Reject with "+num);
    }, 2000);
});

pr
.then(function(val){
    console.log("Accepted with");
    return val;
})
.then(function(val){
    console.log(val);
})
.catch(function(val){
    console.log(val);
})
.finally(function(){
    console.log("Ya to resolve ho gya ya to reject ho gya");
});