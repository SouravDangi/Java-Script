// Call back
// When we pass a function as an argument to another function, that function is called a callback function.
// here (fun function) is passed to (thoriDerBaadChalunga function) so fun is a callback function.
// thoriDerBaadChalung is a higher order function because it take a function as a parameter.

function thoriDerBaadChalunga(fnc){
    setTimeout(()=>{
        fnc();
    }, 8000);
}

thoriDerBaadChalunga(function(){
    console.log("Chal Gya");
});


// callback hell.
// It is a situation in JS where multiple callbacks are nested inside each other, making code difficult to read, understand, 
// debug, and maintain.
function profileLekeAao(userName, fun){
    console.log("fatching profile data...")
    setTimeout( ()=>{
        fun({userName, id:2004, age:23, gender: "Male"});
    }, 2000);
}
function postLekeAao(id, fn){
    console.log("fatching posts...")
    setTimeout(()=>{
        fn({id, posts:["Hi", "Hello", "How are you"]});
    },2000);
}
function savePostLao(id, fnc){
    console.log("fatching saved posts...")
    setTimeout( ()=>{
        fnc({id, saveP:["Hi", "Hello"]});
    }, 2000);
}


profileLekeAao("saurabh", function(data){
    console.log(data);
    postLekeAao(data.id, function(post){
        console.log(post);
        savePostLao(data.id, function(savePost){
            console.log(savePost);
        });
    });
});