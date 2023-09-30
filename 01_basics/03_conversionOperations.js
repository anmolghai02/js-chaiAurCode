let score = "33a";

console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score);  //eh NaN ho jna jo ki not a number 
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);         //NaN
//convert ho geya , value wrong.

// if value was null -> converted to 0.
// if value was undefined -> converted to NaN
//if bool true -> 1 , false -> 0
//if String then -> NaN
//Type te Convert ho he jnde va -> value 

//diffDataTypes to Number
//"33" => 33
// "33abc" => NaN
//true =>1 ; false => 0

let isLoggedIn = -1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//number to bool
//value other than 0 -> true.
//string to bool.
//"" -> false (only empty false)
//"hitesh" -> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
//number to string.





