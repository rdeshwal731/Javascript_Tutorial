/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/



// Enter your code below this line

// Code example
//JAVASCRIPT VARIABLES AND OPERATORS

var ourName ="yo yo honey singh";
let myName ="honey singh";
const yourName = "yo yo"; 
const num1 = 1+2+3+4+5;
const num2 = 7+8+9+10;

console.log (num1);
console.log (num2);

const dif = num2 - num1;
const sum = num1 + num2;
const mul = num1 * num2;
const div = num2 / num1;


console.log (dif);
console.log (sum);
console.log (mul);
console.log (div);
console.log (div*div);
console.log (div/div);
console.log (num2%num1);

for( var i=1; i<=5; i++) 
{
 console.log(i);
}
console.log (ourName);
console.log (yourName);
console.log (myName);

const convo = 'I exclaims to aryan, "yoyo honeysingh is the GOAT!!"';
console.log (convo);

const goodStr = 'Aryan asks me, "Hey, let\'s listen yoyo!"'; 
const badStr = 'I said, "Let\'s go!"';
const ourStr = "I came first. " + "You came second.";
const ourStr2 = "Hello, it's your boy " + ourName + ", let's go, pepole";
const anAdj = " awesome!";
let newStr = "honey singh is";
newStr += anAdj;

console.log (goodStr);
console.log (badStr);
console.log (ourStr);
console.log (ourStr2);
console.log (newStr);
console.log (goodStr.length);













//javascript variables and operators
/*
if-else-else if statements and conditional logic
*/





var x = 10;
const y = 20;
var z = 30


if (x < 10) 
{
    console.log (greeting = "Good morning");
} 
else if (x < 20) 
{
    console.log (greeting = "Good day"); 
} 
if (y==20 )
{
    console.log("y is 20");
}
if (z==="30")
{
    console.log ('z is "30"');
}
else if (z===30)
{
    console.log ('z is 30');
}
if (x!='y')
{
    console.log ('x is not \'y\'');
}
if (z!==30)
{
    console.log ('z is strictly not 30');
}
else if (z!=='30')
{
    console.log ('z is strictly not \'30\'');
}
if (z>x || z>y)
{
    console.log ('z is greater than x or y');
}
if (y>=x || z>=y && x<=10)
{
    console.log ('y>=x or z>=y and x is <=10');
}