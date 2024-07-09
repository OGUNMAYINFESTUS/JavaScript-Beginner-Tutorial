

function person(para1, para2, para3) {
    this.name = para1;
    this.age = para2;
    this.favColor = para3;
}

var p1 = new person("John", 84, "Green");
var p2 = new person("Peter", 91, "Blue");
var p3 = { name: "James", age: "32", favColor: "Lemon" };
console.log(p1);
console.log(p2);
console.log(p3);


function person(para1, para2, para3) {
    this.name = para1;
    this.age = para2;
    this.dateOfBirth = function(){
        return 2024 -this.age;
    }
    this.updateAge = function(newAge){
        this.age = newAge;
    }
    var p1 = new person("John", 84);
    var p2 = new person("Peter", 91);
    
    console.log(p1.dateOfBirth());
    console.log(p2.dateOfBirth());
    p2.updateAge(32);
    console.log(p3.dateOfBirth());

}