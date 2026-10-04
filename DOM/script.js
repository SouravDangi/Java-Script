let h=document.getElementById("hi");
console.dir(h);

let h2=document.querySelector("h2");
console.dir(h2);

h2.innerHTML="<i>hi</i>"
console.dir(h2);

// let h2=document.querySelector("h2");
// h2.innerText=h2.innerText + " from Saurabh Singh";
// console.log(h2.innerText);

// let divs=document.querySelectorAll("div");
// divs[0].innerText="New unique value 1";
// divs[1].innerText="New unique value 2";
// divs[2].innerText="New unique value 3";

//  let ind=1;
// for(let div of divs)
// {
//     div.innerText=(`New inner value ${ind}`);
//     ind++;
// }

let a=document.querySelector("a");
// Set attribute
// a.href="https://www.google.com";
// or
a.setAttribute("href","https://www.google.com");

// getAttribute
console.log(a.getAttribute("href"));

// removeAttribute
//a.removeAttribute("href");