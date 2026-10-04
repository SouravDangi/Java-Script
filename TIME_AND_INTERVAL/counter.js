let counter=10;

let i=setInterval(function()
{
    if(counter>=0){
        console.log(counter);
        counter--;

    }else{
        clearInterval(i);
    }
}, 1000);

document.cookie="Name=Saurabh";
console.log(document.cookie);
