// LEARNING OBJECT LITERAL 

var userOne = {
    email: "festus@yahoo.com",
    name: "Festus",
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, "has logged out");
    }
};
console.log(userOne.name)

// UPDATING OBJECTS LITERAL 

userOne.name = "David";
userOne.email = "ogunmayinfestus@yahoo.com";

// LEARNING ABOUT CLASS IN JAVASCRIPT 

class Person {
    constructor(){
        
    }
}