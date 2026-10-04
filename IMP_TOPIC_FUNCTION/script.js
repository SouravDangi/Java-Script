// function sum(a, b)
// {
//     console.log(a%b);
// }
// sum();   // Output NaN (Not a Number).


// clousers  when a function remembers its parent scope, even after the parent has finished.
function abcd(){
    let a=10;
    return function()
    {
        console.log(a);
    }
}

let fun=abcd();
fun();
// or
abcd()();


// IIFE (Immediately invoked function exprection)
(function(name)
{
    let age=23;
    console.log(name, age);
})("Saurabh");
// age will not be accessed outside the function scope 
// even if it is var because in IIFE variables are private and can't be accessed outside 


// Pass a function into another function and execute it inside.
function oho()
{
 console.log("Hello");
}
function hello(val)
{
    val();
}
hello (oho);
// Or
function ha(h)
{
    h();
}
ha(function(){
    console.log("Hi");
});