myFun(); // Line 1

var myFun = function () {
  console.log("first");
}; // Line 2 (function expression)

myFun(); // Line 3

function myFun() {
  console.log("second");
} // Line 4 (function declaration)

myFun(); // Line 5
