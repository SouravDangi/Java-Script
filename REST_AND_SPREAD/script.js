// rest Operator ... (It allow us to take remaining values of parameters and group them (Array)).

function numbers(...num)
{
    for(i of num)
    {
       console.log(i);
    }
}
numbers(1, 3, 5, 9);

function alphabet(n1, n2, ...alp)  // In this a and b are in n1 and n2 rest are in alp.
{
    for(i of alp)
    {
       console.log(i);
    }
}
alphabet("a", "b", "c", "d");