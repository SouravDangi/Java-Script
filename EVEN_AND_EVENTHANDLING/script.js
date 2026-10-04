let p=document.querySelector("p");

// p.addEventListener("dblclick",function(){
//     p.style.color="red";
//     p.style.backgroundColor="yellow";
// })

// OR

function practice(){
    p.style.color="red";
    p.style.backgroundColor="yellow";
}

p.addEventListener("click",practice);
// p.removeEventListener("click",practice);

let input=document.querySelector("input");
input.addEventListener("input",function(evt){
    if(evt.data!==null)
    {
        console.log(evt.data);
    }
});