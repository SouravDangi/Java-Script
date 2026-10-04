let pr=new Promise(function (res, rej){
    setTimeout(() => {
    let num=Math.floor(Math.random()*10);
    if(num<5) rej("Error");
    else res(num);
    }, 2000);
    
});

async function randomNumber() {
    try{
        let n=await pr;
        console.log("Accepted with "+n);
    }
    catch(err){
        console.log(err);
    }
}
randomNumber();