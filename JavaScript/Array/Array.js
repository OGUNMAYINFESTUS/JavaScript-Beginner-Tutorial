var dinosaurs = []
dinosaurs [0] = "T-Rex";
dinosaurs [1] = "Velociraptor";
dinosaurs [2] = "Stegosaurus";
dinosaurs [3] = "Triceratops";
dinosaurs [4] = "Brachiosaurus";
dinosaurs [5] = "Pteranodom";
dinosaurs [6] = "Apatosaurus";
dinosaurs [7] = "Diplodocus";
dinosaurs [8] = "Campsegnathus";
dinosaurs [33]= "Philosoraptor";
console.log(dinosaurs)

var dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
console.log(dinosaursAndNumbers[2][0])
console.log(dinosaursAndNumbers[3])
console.log(dinosaursAndNumbers[2][1])

var maniacs = ["Yakko", "Wakko", "Dot"];
console.log(maniacs.length);
console.log(maniacs[maniacs.length - 1]);

// ADDING ELEMENT TO AN ARRAY 
// to add an element to the end of an Array, use the push method.
var Animals = [];
Animals.push("Dog");
Animals.push("Cat");
Animals.push("Sheep");
Animals.push("Goat");
Animals.push("Chicken")
console.log(Animals);
console.log(Animals.length);
console.log(Animals[Animals.length - 2]);


// to add an element to the beginning of an Array, use unshift method 
Animals.unshift("Monkey");
Animals.unshift("Polar Bear");
Animals.unshift("Lion");
Animals.unshift("Tiger");
Animals.unshift("Gorrila");
console.log(Animals)


//to remove an element from the end an array, use the pop() method. 
var lastAnimals = Animals.pop();
console.log(lastAnimals);
var lastAnimals = Animals.unshift();
console.log(Animals);

// to remove an element from the beginning of an array, use shift.
var firstAnimals = Animals.shift();
console.log(Animals);







