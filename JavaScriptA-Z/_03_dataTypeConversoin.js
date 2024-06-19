let score = 33;
console.log(typeof score);
dataType = typeof score;

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let age = '33abc';
let ageInNumber = Number(age);
console.log(ageInNumber);

console.log(typeof NaN);

// Results in NaN as the output i.e. Not a Number
// This happens because the method is unable to generate a single value integer for the given strinng value provided
// As in the example 33abc cannot be converted into a single output integer and hence returns a NaN value

// NOTE : The type of NaN is also considered Number in javascript

let value = null;
console.log(Number(value));
// The above 2 lines results in a value of 0 when nothing is provided the output number generated is 0
// However this might not always be advantagous.
// For e.g. in the temperature system, If the current temeperature is set to Null,
// but whhile conversion the system changes it to 0, which is a valid value of temperature,
// this can cause big experimental errors
// Hence these types of cases should be kept in mind before implemented these features on real time projects.

let undefValuue = undefined;
console.log(Number(undefined));
// Results in a value NaN as undefined is not a number

// Checking the conversion case with boolean values

var isLoggedIn = 3;
var booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(Number(booleanIsLoggedIn));

var isLoggedIn = NaN;
var booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(Number(booleanIsLoggedIn));

let NotANumber = NaN;
console.log(Number(NotANumber));

let num = '';
console.log(Number(num));

/*
---------------------------SUMMARY-------------------------
Value --------------------------> After conversion to number
33------------------------------> 33
33abc --------------------------> NaN
true ---------------------------> 1
false --------------------------> 0
undefined ----------------------> NaN
NaN ----------------------------> NaN
null ---------------------------> 0
'' -----------------------------> 0
*/
