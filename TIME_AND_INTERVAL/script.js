let tout=setTimeout(function(){
    console.log("Hi I am Saurabh")
}, 3000);

let iv=setInterval(function(){
    console.log("Dangi")
}, 3000)

clearTimeout(tout);
clearInterval(iv);