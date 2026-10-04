function vowels(str){
    let num=0;
    for(let i of str)
    {
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u")
        {
            num++;
        }
    }
    return(num);
}

let str="an apple a day keep docters away";
let keyword=vowels(str);
console.log(`Total number of vowels are ${keyword}`);


const sum=(num1, num2)=>
{
    return (num1+num2);
};

let add=sum(30, 20);
console.log(`Sum is ${add}`);