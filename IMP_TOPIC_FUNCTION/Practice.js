// Discount Calculater using Closure and HOF (higher order function) 
function discountCalculater(discount){
    return function(price){
        return price-price*(discount/100);
    }
}
discounter=discountCalculater(10);
console.log(discounter(100));
console.log(discounter(200));
console.log(discounter(300));
console.log(discounter(400));
console.log(discounter(500));


// IIFE function to isolate varaible 
(function (){
    const pass=12390;
    console.log(`Passward is ${pass}`);
})();