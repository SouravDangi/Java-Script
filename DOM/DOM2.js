// create element
// append/ prepend elements 
// end   / start

let h2= document.createElement("h2");
h2.innerText="Hello Saurabh";
// document.body.prepend(h2);
// Or
document.querySelector("body").prepend(h2);

h2.remove();

// CSS change using js
let h3=document.querySelector("h3");
// h3.style.color="red";
// h3.style.backgroundColor="green"
// or add css class
h3.classList.add("hulu");
// remove class
//h3.classList.remove("hulu");
// h3.classList.toggle("hulu"); // agar h to htado nhi h to lga do
console.dir(h3);