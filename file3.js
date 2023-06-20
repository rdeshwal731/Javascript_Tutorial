/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/


//Ternary Operators

//Use the Conditional (Ternary) Operator
/*
if else example

function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater or equal";
    }
  }
*/
let a=20;
let b=10;
  function findGreater(a, b) 
  {
    return a > b ? "a is greater" : "b is greater or equal";
  }
    
//Use Multiple Conditional (Ternary) Operators
/*
if else else if example
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
*/
function findGreaterOrEqual(a, b) 
{
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }
  
