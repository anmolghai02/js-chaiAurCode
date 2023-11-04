//if statement

const isUserLoggedIn = true
if(isUserLoggedIn){
}

//comparision operators : < , > , <= , >= , == , != , === , !== (es vich DT ve check hunda)
//=== also checks the datatype 

//reason for the === (triple equal)
if(2=="2"){
    console.log("executed")        //This will get executeds
}
if(2==="2"){
    console.log("executed2")       //this will not   -> as it is strict checking.
}

//else statement

//scope of var is global
const score = 200
if(score > 100){
    let power = "fly"
    var temp = "this is global"
    console.log(power)
    console.log(temp)
}
// console.log(power) //out of scope
console.log(temp)      //accessible -> no error will come.

var temp = 133;  //brother upper declared c fer ve eh POSSIBLE and hun value 133 va
console.log(temp)    //SERIOUS ISSUE MAN


//IMPLICIT braces     //eh assi use nai krde but still yr mcq vich andde va vase cpp hunda oh pta nai baaki mai fer ve lekh reha
// if(true) console.log("test")
//for multiple words
// if(true) console.log("test"),console.log("test2");  //eh neeche ve lekh sakhda c
//don't use this way


//else if statements 


//&& , ||