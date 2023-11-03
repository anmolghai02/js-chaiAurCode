//in js functions are imp and in js , we need to learn memory managment ve krna penda va.
//c de level vala nai.

//syntax
function sayMyName(){
    console.log("H")
    console.log("a")
    console.log("m")
}

sayMyName //this is reference
sayMyName() //this will execute the function

//function with parameters
function addTwoNumber(num1 , num2){   //in js no need to give type.
    console.log(num1 + num2 );
}
addTwoNumber()  //o/p : NaN
addTwoNumber(3,4)          //here values are called arguments 
addTwoNumber(3,"4") //o/p : 34
addTwoNumber(3,"a") //o/p : 3a
addTwoNumber(3,null) //o/p : 3

const result = addTwoNumber(3,4)
console.log(result)  //o/p : undefined 
                //reason : we didn't returned anything from the function

//return Keyword
function addNumber(num1 , num2){
    let res = num1 + num2 
    return res
    //console.log("hitesh")  //it will never execute as after the result nothing prints.

    //or return num1+num2
}
// const result2 = addNumber(3,4)
// console.log(result2)   //o/p : 7


//In JS , if don't send the argument in function -> then it will be undefined.
//example
function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("please enter a username")
    //     return
    // }
    return `${username} just logged in`
}
console.log(loginUserMessage())    //here argument is not provided so the username print will be undefined
//o/p : undefined just logged in

//to set default value :
// function loginUserMessage(username = "sam"){ ......}


