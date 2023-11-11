//for declaring the objects there are two ways : like literal and other like constants.(HE MEANT )
//both are same but difference is of the singleton
    //variable with const -> constant vala

//singleton : means unique object (created by constructor)
//by other way then multiple instances can be made.

//constructor way:-     (this makes the singleton )
// Object.create  -> syntax (in future)

const mySym = Symbol("Key1")        //just for the symbol to be used in the JsUser OBJECT
//object by literals : (singleton is not made)
const JsUser = {
    name : "hitesh",     //key is name and value is "hitesh"
    age : 18,
    "full Name" : "hiteshChoudary",
    [mySym] : "mykey1",    //if [] not there then it wouldn be the string.
                                    //when console.log it will also show that it is symbol
    location : "jaipur",
    email : "hitesh@gmail.com",
    isLoggedIN : false,
    lastLoginDays: ["monday" , "saturday"]
}
//name(first key) is string but we don't use "" this. (can if we want)
//in array , key is already defined. Here we define key too.

//to access
console.log(JsUser.email)   // OR    
console.log(JsUser["email"])        //but have to input as string (as it is String)
// console.log(JsUser.full Name);  //not-valid only way is ["full Name"] but it was fullName then valid
console.log(JsUser[mySym]); //valid
console.log(JsUser.mySym);  //it will print undefined -> not possible

console.log(typeof JsUser.mySym); //o/p : undefined
console.log(typeof JsUser[mySym])  //o/p : string 
console.log(typeof mySym);         //o/p : symbol     //Reason 4 correct : it is declared as this.


//to override the value  use = operator
JsUser.email = "hitesh@ch.com"

//FREEZE METHOD
        //to use JsUser object further -> we commented freeze(lock concept)
// //to freeze the value of object : use freeze() operator
// Object.freeze(JsUser)
// JsUser.email = "anmol@gmail.com"  //this will not provide the error BUT it also not change.
// //console.log(JsUser)    //to check -> will show unchanged object


//function in the object       -> first off freeze , if not done 
JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user , ${this.name}`)         //this refers to the object 
}
console.log(JsUser.greeting) // o/p: [Function (anonymous)] (without()) this is function reference it is not executed.... more use in future.
console.log(JsUser.greeting())  //will run the function (and at end line there was undefined written...reason?in future )
console.log(JsUser.greeting2())  //same


