// Learning About Objects in JavaScript 


const person = {
    user: "Festus Ogunmayin",
    nationality: "Nigeria",
    profession: "Software Engineer",
}
console.log(person.user);
console.log(person.profession);
console.log(person.nationality);



var User = {
    name: "David",
    age: 30,
    city: "Lagos",
    school: "Learning Ladder School",
}
console.log(User.name);
console.log(User.age);
console.log(User.city);
console.log(User.school); 


var pearson = {
    name: "David Johnson",
    age: 30,
};
console.log(pearson.name);
console.log(pearson.age);
pearson.gender = "Male";
console.log(pearson.gender);
pearson.maritalStatus = "Married";
console.log(pearson.maritalStatus);
pearson.stateOfOrigin = "Ondo State";
console.log(pearson.stateOfOrigin);
pearson.localGovtArea = "Ilaje";
console.log(pearson.localGovtArea);


var dog = {
    name: "Pancake",
    age: 6,
    color: "White",
    bark: "Yip yap!"
}
console.log(dog);



var cat = {};
cat["legs"] = 3;
cat["name"] = "Harmony";
cat["color"] = "Tortoiseshell";
cat;
console.log(cat);

var dog = {};
dog.legs = 4;
dog.name = "Pancake";
dog.color = "White";
dog;
console.log(dog);

// COMBINING ARRAYS AND OBJECTS 
var dinosaurs = [
    {name: "Tyrannosaurus Rex", period: "Late Cretaceous"},
    {name: "Stegosaurus", period: "Late Jurassic"},
    {name: "Plateosaurus", period: "Triassic"}
];
console.log(dinosaurs[0]);
console.log(dinosaurs[1]);
console.log(dinosaurs[2]);
console.log(dinosaurs[0]["name"]);
console.log(dinosaurs[1].period);


// MAKING AN ARRAY OF FRIENDS 

var anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Dave", age: 10, luckyNumbers: [3, 9, 40] };
var kate = { name: "Kate", age: 15, luckyNumbers: [1, 2, 3] };
var dove = { name: "Dove", age: 20, luckyNumbers: [4, 5, 6, 8] };
var dike = { name: "Dike", age: 16, luckyNumbers: [3, 5, 7, 10] };
var friends = [anna, dave, kate, dove, dike];
console.log(friends);
console.log(friends [0]);
console.log(friends [1]);
console.log(friends [1] .luckyNumbers);

// KEEPING TRACK OF OWED MONEY 
const owedMoney = {};
owedMoney ["Jimmy"] = 5;
owedMoney ["Anna"] = 7;
owedMoney ["Jummy"];
owedMoney ["Jimmy"] += 3;
console.log(owedMoney.Jimmy);
console.log(owedMoney);
owedMoney.Jummy = 9;
console.log(owedMoney.Jummy);
console.log(owedMoney);


// STORING INFORMATION ABOUT YOUR MOVIES 

var movies = {
    "Finding Nemo": {
        releaseDate: 2003,
        duration: 100,
        actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
        format: "DVD"
    },
    "Star Wars: Episode VI - Return of the Jedi": {
        releaseDate: 1983,
        duration:134,
        actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
        format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
        releaseDate: 2005,
        duration: 157,
        actors: ["Daniel radcliffe", "Emma Watson", "Rupert Grint"],
        format: "Blu Ray"
    }
};
var findingNemo = movies ["Finding Nemo"];
var harryPotter = movies["Harry Potter and the Goblet of Fire"];
var starWar = movies["Star Wars: Episode VI - Return of the Jedi"];
console.log(findingNemo.actors);
console.log(starWar.actors);
console.log(harryPotter.actors);

// ADDING NEW MOVIE TO THE EXISTING MOVIES 
var cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Owen Willson", "Bonnie Hunt", "Paul Newman"],
    format: "Blu Ray"
};

movies["Cars"] = cars;
Object.keys(movies);
console.log(movies);

// PROGRAMMING CHALLENGES 
/*QUESTION:
#1: Scorekeeper
Imagine you’re playing a game with some friends and you
want to keep track of the score.Create an object called
scores.The keys will be the names of your friends, and the
values will be the scores(which will all start at 0).As the
players earn points, you must increase their scores.How
would you increase a player’s score in the scores object? */

// OBJETC ORIENTED PROGRAMMING 


class Movie {
    constructor(title, date, duration, actors, format){
        this.title = title;
        this.date = date;
        this.duration = duration;
        this.actors = actors;
        this.format = format;
    }
};
var userOne = new Movie ("Finding Nemo", "2003", 100, ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"], "DVD");
var userTwo = new Movie ("Star Wars: Episode VI - Return of the Jedi", "1983", 134, ["MarK Hamill", "Harrison Ford", "Garrie Fisher"], "DVD");
var userThree = new Movie ("Harri Potter and the Bolet of Fire", "2005", 157, ["Daniel Radliffe", "Emma Watson", "Rupert Grint"], "Blu-ray");

console.log(userOne);
console.log(userTwo);
console.log(userThree);





















