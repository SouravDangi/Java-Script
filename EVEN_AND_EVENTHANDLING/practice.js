let div=document.querySelector("#main");
let h1=document.querySelector("h1");
h1.textContent="Hi";

window.addEventListener("keydown",function(dets)
{
    if(dets.key===" "){
        h1.textContent="Space"
    }
    else{
        h1.textContent=dets.key;
    }
});