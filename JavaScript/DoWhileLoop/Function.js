// Using function in our calculations. 
function sum(num1, num2)
{
    var sum = num1 + num2;
    console.log(sum);
}
sum (4,5)

function add2Numbers(a, b)
{
    var total = a / b;
    console.log("The total of 'a' and 'b' is equal to " + total);
}
add2Numbers(40, 2);

function MyName (a, b)
{
    var total = a+b;
    console.log("My name is " + total)
}
MyName('Festus ', 'Ogunmayin')


function getNum (x)
{
    var lastNum = x + 5;
    for (x; x < lastNum; x++);
    console.log(x);
}
getNum(20);
getNum(30);

var myGreeting = function()
{
    console.log('Hello world');
}
myGreeting()

var sayHelloTo = function (name)
{
    console.log('Hello ' + name + '!');
}
sayHelloTo("Ogunmayin Festus");

function sayHello()
{
    console.log("Hello dear");
}
sayHello()

var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^=");
    }
};
drawCats(10);

function myGreeting ()
{
    alert('you are great!');
}
myGreeting();

