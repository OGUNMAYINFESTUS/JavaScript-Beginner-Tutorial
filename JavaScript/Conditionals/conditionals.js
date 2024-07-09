// Conditional Statement in JavaScript.
// There are two types of conditional statements in JavaScript.
// They are (1) The If statements
//          (2) The Else statements

// var response = prompt("Enter Age");
// var age = parseInt(response)
// if (age > 30) {
//     alert("Enter VIP")
// } 
// else if(age> 25){
//     alert("Enter SP room")
// }
// else if(age> 21){
//     alert("Enter XP room")
// }
// else{
//     alert("Leave")
// }

// var age = 10;
// var msg = (age > 21) ? "Enter" : "Leave";
//     alert(msg)

// var val= 2;
// switch(val){
//     case 1: 
//          alert("hello")
//          break
//      case 2: 
//          alert("hello 2")
//          break
//      case 3:
//          alert("hello 3")
//          break
//      case 4:
//          alert("hello 4")
//          break
//      default:
//          alert("bye")
//          break
//  }

// var score = parseInt(prompt("Enter score"));
// if (score > 100) {
//     alert ("This is Invalid Score")
// } else if (score >= 90) {
//     alert ("Your Grade is Excellent")
// } else if (score >= 80) {
//     alert ("Your Grade is Very Good")
// } else if (score >= 70) {
//     alert ("Your Grade is Good")
// } else if (score >= 60) {
//     alert ("Your Grade is Above Average")
// } else if (score >= 50) {
//     alert ("Your Grade is Average")
// } else {
//     alert ("This is a failure")
// } 


// /*You’re ordering Chinese
// food and you’re choosing what to eat. Your favorite Chinese dish
// is lemon chicken, so you’ll have that if it’s on the menu. If it’s
// not, you’ll have beef with black bean sauce. If that’s not on the
// menu, you’ll have sweet and sour pork. In the rare case that none
// of those options is available, you’ll have egg fried rice, because you
// know all the Chinese restaurants you go to will have that.*/


// var lemonChicken = false;
// var beefWithBlackBean = true;
// var sweetAndSourPork = true;
// if (lemonChicken) {
//     alert ("Great! I'm having lemon chicken!");
// } else if (beefWithBlackBean) {
//     alert ("I'm having the beef.");
// } else if (sweetAndSourPork) {
//     alert ("OK, I'll have the pork.");
// } else {
//     alert ("Well, I guess I'll have rice then.");
// } 

// /*Write a program with a name variable. If name is your name,
// print out Hello me!; otherwise, print Hello stranger!. (Hint:
// Use === to compare name to your name.)
// Next, rewrite the program so it’ll say hi to your dad if
// name is set to your dad’s name or hi to your mom if name is
// your mom’s name. If it’s neither of them, say Hello stranger!
// as before.*/


// var name = prompt ("Enter Your Name");
// if (name === "Ogunmayin Festus") {
//     alert ("Hello " + name)
// } else if (name === "Ogunmayin Shola") {
//     alert ("Hello " + name)
// } else if (name === "Ogunmayin Olorunwa") {
//     alert ("Hello " + name)
// } else if (name === "Ogunmayin Tomola"){
//     alert ("Hello " + name)
// } else {
//     alert ("You are not a member of our family")
// } 

// //Using Conditional Statements to Check More Than One Conditions

// var one = prompt("Enter the first number");
// var two = prompt("Enter the second number");
// one = parseInt(one);
// two = parseInt(two);
// if (one == two) {
//     alert (one + " is eqaul to " + two + ". ");
// } else if (one > two) {
//     alert (one + " is less than " + two + ". ")
// } else{
//     alert (one + " is greater than " + two + ". ")
// }
// */