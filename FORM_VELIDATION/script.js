let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("form");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    document.querySelector("#emailError").textContent="";
    document.querySelector("#passwordError").textContent="";

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailAns=emailRegex.test(email.value);
    let passAns=passwordRegex.test(password.value);


    if(!emailAns && email.value. length>1)
    {
        document.querySelector("#emailError").textContent="Invalid Email";
    }
    if(!passAns && password.value. length>1)
    {
        document.querySelector("#passwordError").textContent="Invalid Password"
    }

})