/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

//The Switch Statement

//Selecting from Many Options with Switch Statements
switch (lowercaseLetter) 
{
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
}
/*case values are tested with strict equality (===). 
The break tells JavaScript to stop executing statements. 
If the break is omitted, the next statement will be executed.
*/

//Adding a Default Option in Switch Statements
switch (num) 
{
    case value1:
      statement1;
      break;
    case value2:
      statement2;
      break;

    default:
      defaultStatement;
      break;
}
/*A default statement should be the last case.
*/

//Multiple Identical Options in Switch Statements
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
/*Cases for 1, 2, and 3 will all produce the same result.
*/
