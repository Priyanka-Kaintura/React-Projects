const accountId = 1234;
let accountMail = 'priyanka@gmail.com';
var accountPassword = 'Password';
accountCity = 'Jaipur';

// accountID = 2        ---- Not Allowed
// Cannot reassign values in const variables

accountMail = 'priyankak@gmail.com';
accountPassword = 'Password2';
accountCity = 'PinkCity';
let accountState;

console.log(accountId);
console.log(accountMail);
console.log(accountPassword);
console.log(accountCity);

// Prints a table with the contents as in the square bracketes.
console.table([accountId, accountMail, accountPassword, accountCity, accountState]);
// Prefer not to use var due to issues with block scope and function scope

/*
There is only one method to declare constants i.e. using the keyword const
However we can declare variables in various ways, i.e. 
by using keyword let
by using keyword var
In initial days javaScript didint work on the basis of scopes and hence no concept of local annd global variables was there.
var was the way in which variables were declared in the early js
var is not popularly used now a days
If variable is declared in javascript and not given any value i.e. is the state of variable is unknown than javascript makes it undefined on its own

*/
