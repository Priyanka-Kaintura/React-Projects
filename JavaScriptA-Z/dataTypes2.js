'use strict'; //treats all JS code as newer version

// alert('hello');
// Alert statements work fine in browser but when run as a file can have problems in node js
// console.log("Hello")  console.log("Priyanka")
// The above loc produces error as the first statement printing hello did not end and another statement was written
//  Hence to end a statement we either have to change line or add a semicolon at the end of the statement
// Otherwise an error is produced
// But at the same time code readability should be preserved
// As example
console.log('Hello');
console.log('Priyanka');
let accountId = 1234;
// The above line is syntactically and semantically correct however it is not a good practice to use this type of format as it is highly unreadable for any user

/*
VARIOUS DATA TYPES IN JAVASCRIPT ARE:
number
bigInt
sstring
boolean
null: standalone value
undefined: 
symbol: used for uniqueness.eg. In Figma we use different symbold
object

*/

// typeof method helps find the data type of a value

// eg.
console.log(typeof accountId);
console.log(typeof null);
console.log(typeof undefined);
