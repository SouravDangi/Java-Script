// Clasical inheritance
class User{
    constructor(name, address, email){  
        this.name=name;
        this.address=address;
        this.email=email;
        this.role="user";
    }

    printRole()
    {
        console.log(`Role is ${this.role}`);
    }
    
    write(text)
    {
        let h2=document.createElement("h2");
        h2.textContent=text;
        document.body.append(h2);
    }
};

// extends helps child class to inharit the properties of parent class.
// super can call constructor of parent class. And it is also used to call parent class methods.

class Admin extends User{
    constructor(name, address, email){
        super(name, address, email);
        // must use super before using this in child (derived) class.
        this.role="admin";
    }

    deleteData(){
        document.querySelectorAll("h2").forEach(function(elem)
    {
        elem.remove();
    })
    }    
};

let user1= new User("Sumit", "Berinag", "suma@gmail.com");
let admin1=new Admin("Saurabh", "Berinag", "saurav@gmail.com");
user1.write("hi admin");
admin1.write("hi user")
user1.printRole();
admin1.printRole();
// admin1.deleteData();