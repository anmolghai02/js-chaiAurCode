let score = "33a";

console.log(typeof(score));/*same*/console.log(typeof score);

let valueInNumber = Number(score);  //eh NaN ho jna jo ki not a number 
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);         //NaN
//convert ho geya , value wrong(ie NaN).

// if value was null -> converted to 0.
// if value was undefined -> converted to NaN  //means undefined he deta va like null
//if bool true -> 1 , false -> 0
//if String(means like "233A") then -> NaN
//Type te Convert ho he jnde va ->But value nai. 

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

//********** OPERATION ************
console.log(2**3); //2 de power

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1+str2;
console.log(str3);

console.log("1"+2) //op 12
console.log(1+"2") //op 12
//IMP
console.log("1"+2+2); //answer 122 
console.log(1+2+"2"); //answer 32
//eh rule va

console.log(1+2*5%6);  //answer 5 avega
//this is less readible -> brackets use kr bodmas nal
//not in js , it is general.

console.log(+true); //answer 1
// console.log(true+)  not possible
console.log(+""); //answer 1
// console.log(""+);  not possible

//prefix and postfix
let gameCounter = 100
gameCounter++;
console.log(gameCounter);