//this keyword
const user = {
    username : "hitesh",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)   //without this keyword -> error
        console.log(this)  //o/p : the object we wrote will be output
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()  //username changed one

console.log(this)  //o/p : {} empty object
//REMEBER
//but in console :: it will Window object (it is global object in browsers)


//this in function .
function chai1(){
    let username = "hitesh"
    console.log(this.username) //o/p : undefined it only work for objects
    console.log(this);       
    //o/p: here many things will come up
}
chai1()

const chai2 = function(){
    let username = "hitesh"
    console.log(this.username) //o/p : still undefined
    console.log(this)
    //o/p: here many things will come up
}
chai2()

//ARROW FUNCTION and This 
const chai3 = () => {
    let username = "hitesh"
    console.log(this.username) //o/p : still undefined
    console.log(this);   //o/p : {} means empty object
}
chai3();

//Arrow Function

() => {}       //this is basic arrow funciton
//you can add it under a variable
const addtwo = (num1 , num2) => {
    return num1+num2;
}
console.log(addtwo(3,4))

//implicit return                 -> highly used in the REACT
//means you don't need to write return -> it wil automatically return
const addTwo = (num1 , num2) => num1+num2  //you can wrap in parenthesis. but if braces used you have to use the return keyword   
//it will return automatically.
console.log(addTwo(3,4)) //op : 7

//BUT TO RETURN Object YOU HAVE TO USE THE PARANTHESIS
const add = () => ({username : "hitesh"})   //object va
console.log(add()) 

//syntax : for future
const myArray = [2,5,3,7,8];
myArray.forEach(() => {})   //this for each loop
//or
myArray.forEach(function(){}) 