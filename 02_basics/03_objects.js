//for declaring the objects there are two ways : like literal and other like constants.
//both are same but difference is of the singleton
    //variable with const -> constant va

//singleton : means unique object (created by constructor)
//by other way then multiple instances can be made.

//constructor method
// Object.create  -> syntax  //in future

const mySym = Symbol("Key1")

//object literals : (no singleton is made)
const JsUser = {
    name : "hitesh",     //key is name and value is "hitesh"
    age : 18,
    "full Name" : "hiteshChoudary",
    [mySym] : "mykey1",               //if [] not there then it wouldn be the string.
                                    //when console.log it will also show that it is symbol
    location : "jaipur",
    email : "hitesh@gmail.com",
    isLoggedIN : false,
    lastLoginDays: ["monday" , "saturday"]
}
//name is string but we don't use "" this.
//in array , key is already defined

//to access
console.log(JsUser.email)   // OR    
console.log(JsUser["email"])        //but have to input as string (as it is String)
// console.log(JsUser.full Name);  //not-valid only way is ["full Name"] but it was fullName then valid
console.log(JsUser[mySym]);
console.log(typeof JsUser.mySym)

//to override the value  use = operator
JsUser.email = "hitesh@ch.com"

        //age kaam krna lye comment kita
// //to freeze the value of object : use freeze() operator
// Object.freeze(JsUser)
// JsUser.email = "anmol@gmail.com"  //now this will not provide the error but it will not change
// //to check 
// //console.log(JsUser)



//function in the object       -> phele freeze nu off krna
JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user , ${this.name}`)         //this refers to the object
}
console.log(JsUser.greeting) // will return [Function (anonymous)] (without() )

console.log(JsUser.greeting())  //will run the function (and end te undefined ayea c  pta nai kyu? kehnda future vich)

console.log(JsUser.greeting2())


