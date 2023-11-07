const accountId = 144553
let accountEmail = "hitesh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountID = 2 (not allowed as constant declaration) //eh interpreter dekhe ga .
accountEmail = "hc@hc.com"
accountPassword = "21211221"
accountCity = "Bengaluru"

console.log(accountId); //shortcut : log
console.table([accountId , accountEmail , accountPassword , accountCity])

//const for assigning constant value
//let , var and without const & let   -> varible va

/*
    don't use without and var
    for var -> it existed before , it don't had scope , like if used in for loop it will be used.
    js is so type safe language -> without ve declare ho sakhda.
*/

//console.table : provides the output in the table.

let num1 , num2 , num3 ; 