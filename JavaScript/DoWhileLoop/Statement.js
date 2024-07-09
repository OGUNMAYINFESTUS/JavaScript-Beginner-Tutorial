/*
var count = 0;
do {
    console.log (count);
    count ++
} while (count < 5); 


var i = 0;
do {
    i += 2;
    console.log(i)
} while (i < 10); 


var age = 0;
do {
    console.log (age);
    age += 5;
} while (age < 30); 


var age = 3;
do {
    console.log(age);
    ++ age;
}while (age <= 5); 


var count = 0;
while (count < 10) {
    console.log(count);
    count += 2
}

var count = 10;
for (var x = 5; x <= count; x++) {
    console.log(x);
}

var fruits = ['apple', 'banana', 'cherry', 'date'];
for (var x = 0; x < fruits.length; x++ ) {
    console.log('Fruits:', fruits[x]);
}

var count = 10;
for (var i = 0; i <= 10; i += 2) {
    console.log(i);
}

let sum = 10;
for (var i = 0; i <= 10; i++) {
    sum += 1
}
console.log("sum of numbers from 1 to 10:", sum);

var num = 0;
for (var i = 1; i < 10; i++){
    if (i % 5 == 0) {
        break
    }
    sum ++;
}
console.log(num);
*/

/*
for (var i = 0; i < 10; i++){
    console.log(i)
    if(i == 0){
        break
    }
} */

/*
var count = 0
var vals = [10, 30, 70, 50, 100];
do {
    console.log(vals[count]);
    count++
    if (vals[count] == 50) {
        break
    }
} while (count < vals.length) */

/*
var count = 0
var vals = [10, 30, 70, 50, 100];
do {

    if (vals[count] == 50) {
        count++
        continue
    }
    console.log(vals[count]);
    count++
} while (count < vals.length) */

var num = 0;
for (var i = 1; i < 10; i++){
    if(i % 5 == 0){
        continue
    }
    num++
}
console.log(num);

var max = 0;
for(i = 1; i < 10; i++){
    if(i % 5 == 0){
        break
    }
    max++
}
console.log(max);


var num = 0;
outermost:
for (var i = 0; i < 10; i++) {
    for(var j = 0; j < 10; j++) {
        if(i == 5 && j ==5) {
            break outermost;
        }
        num++;
    }
}
console.log(num);

var num = 0;
outermost:
for (var i = 0; i <= 10; i++){
    for (var j = 0; j <= 10; j++){
        if(i == 5 && j == 5){
            continue outermost;
        }
        num++
    }
}
console.log(num);

// Learning switch case in JavaScript 
// Write a program to find days of the week by accepting it numbers.
var day = 1;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3: 
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        consolelog("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("You have entered wrong input");
        break;
}

let dayIndex = 8;
switch (dayIndex) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1: 
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Wednesday");
        break;
    case 3:
        console.log("Today is Tuesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Error: Invalid day Index");
        break;
}

let dayName = prompt("Enter a day name(e.g. Monday)");
switch(dayName.toLocaleLowerCase()){
    case "sunday":
    console.log("Day index 1");
    break
    case "monday":
    console.log("Day index 2");
    break
    case "tuesday":
    console.log("Day index 3");
    break
    case "wednesday":
    console.log("Day index 4");
    break
    case "thursday":
    console.log("Day index 5");
    break
    case "friday":
    console.log("Day index 6");
    break
    case "saturday":
    console.log("Day index 7");
    break
    default:
    console.log("Error: Invalid dayName");
}
