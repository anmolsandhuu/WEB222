/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: _Anmol Singh Sandhu_ Student ID: _135051175_ Date: _12 September 2018_
*
********************************************************************************/

/*********************Task 1*********************/
console.log("TASK 1");
console.log(" ");
var studentname = "Anmol Singh Sandhu";
var nofcourses = 5;
var program = "CPD";
var job = true;

if (job == true)
  {
    var ans = "have";
  }
else 
{
  ans =" dont't have";
}

console.log("My name is " + studentname + " and I'm in " + program + " program. I'm taking " + nofcourses + " course in this semester and I "+ ans + " a part-time job now");
console.log(" ");

/*********************Task 2*********************/

console.log("TASK 2");
console.log(" ");
var year = 2018;
var age = prompt(" Please enter your age: ");
year -= age;
console.log("You were born in the year of " + year);

var syear = prompt("Enter the number of years you expect to study in the college: ");
year += Number(age) + Number(syear);

console.log("You will graduate from Seneca College in the year of "+ year);
console.log(" ");

/*********************Task 3*********************/

console.log("TASK 3");
console.log(" ");
var cel = 50;
var far = cel * 9/5 + 32;
console.log(cel + "°C is "+ far +"°F");
far = 33;
cel = (far - 32) * 5/9;
console.log(far + "°F is "+ cel +"°C");

console.log(" ");

/*********************Task 4*********************/

console.log("TASK 4");
console.log(" ");
for (var i = 0; i <=10; ++i)
  {
    if (i % 2 == 0)
      {
        console.log(i + " is even");
      }
    else
      {
        console.log(i + " is odd");
      }
  }

console.log(" ");

/*********************Task 5*********************/

console.log("TASK 5");
console.log(" ");
function largerNum(x, y)
{
  if (x > y)
    {
       return x;
    }
  else
    {
       return y;
    }
}

var greaterNum = function (a,b)
{
  if (a > b)
    {
    return a;
    }
  else
    {
       return b;
    }
}

console.log("The larger number of 4 and 232 is " + largerNum(4,232));

console.log("The larger number of 2 and 22 is " + largerNum(2,22));


console.log("The larger number of 1 and 0 is " + greaterNum(1,0));

console.log("The larger number of 89898 and 1312 is "+greaterNum(89898,1312));


console.log(" ");

/*********************Task 6*********************/

console.log("TASK 6");
console.log(" ");
var num;
function evaluator()
{
  for (var i = 0; i < arguments.lenght; ++i)
    {
      var num =+ arguments.lenght[i];

    }
  var aver = num/arguments.lenght;
  if (aver >= 50)
    {
     return true;
    }
  else
    {
      return false;
    }
}
console.log("Average greater than or equal to 50: " + evaluator(5,5,5));
console.log("Average greater than or equal to 50: " + evaluator(232,740,3340));


console.log(" ");
/*********************Task 7*********************/

console.log("TASK 7");

var Grader = function (a)
{
  var grade;
  
  if (a>=90)
    grade = "A+";
  else if(a>=80)
    grade = "A";
  else if(a>=70)
    grade = "B";
  else if(a>=60)
    grade = "C";
  else if(a>=50)
    grade = "D";
  
  else 
    grade = "F";
  
  console.log(grade);
  
}
Grader(33);
Grader(88);
Grader(70);


console.log(" ");


/*********************Task 8*********************/

console.log("TASK 8");
console.log(" ");
function showMultiples(num,numMultiples)
{
  for (var i = 1; i <= numMultiples; ++i)
    {
      var output = num * i;
      console.log(num + " X " + i + " = " + output)
    }
  
}
showMultiples(5,5);
showMultiples(12,10);
showMultiples(4,7);


/******************************************/