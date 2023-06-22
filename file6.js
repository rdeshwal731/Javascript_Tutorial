//js loops & functions

//js functions
/*
write reusable js with function
passing values and returning values with return
Global/local Scope and Functions-let and const
global vs local scope in functions
Assignment with a Returned Value
Returning Boolean Values from Functions
Return Early Pattern for Functions
*/

const someVar = "Hat";
function myFun() 
{
  const someVar = "Head";
  return someVar;
}
//myFun();
//console.log(myFun());
function Sharabiyon()
{
    console.log("Hello! Welcome to SHARABIYON.");
}

//Sharabiyon();
function minusTwo(num)
{
    return num - 2;
}
const answer = minusTwo(5);
//console.log(answer);
function minus(x,y)
{
    console.log(y-x);
}
//minus(5,12);
function compare(a,b)
{
    if (a==b)
    {
        return "equal";
    }
    else if (a>b)
    {
        return "greater";
    }
    else if (a<b)
    {
        return "lower";
    }
    else 
    {
        return "invalid";
    }
}
//console.log(compare(10,20));
function myFun() 
{
    console.log("Hello");
    return "World";
    console.log("byebye")
    //byebye never prints because return is already called 
}
//myFun();
console.log(myFun());


