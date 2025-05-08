//? Commit 1 Q1: What is the output of code -> 2 Special cases: what about arrow function and strict mode

// function DoSomething(param1, param2) {
//   arguments[1] = 12;
//   console.log(param2); // 12
//   console.log(arguments); // * [Arguments] { '0': 2, '1': 12 }
//   return param1 + param2;
// }

// console.log(DoSomething(2, 5)); // * 14

// ? Commit 2: Difference btw empty slot and undefined

// const arr = [2, 3, 5];
// arr[10] = 12; // * Since index 10 is far ahead, JavaScript fills the gap (from index 3 to 9) with empty slots, not undefined, but truly empty.
// console.log(arr.length); // 11
// console.log(arr); // [ 2, 3, 5, <7 empty items>, 12 ]

// ? Commit 3:
