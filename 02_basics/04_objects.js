//first declaration way was : const JsUser = {            //not singleton
                            //     name : "hitesh",
                            //     age : 18
                            // }

//second declaration
// const tinderUser = new Object()      //this is singleton 

//third declaration
const tinderUser = {}        //not singleton
tinderUser.id = "123abc"
tinderUser.name = "sammy"           
tinderUser.isLoggedIn = false           //we add these key's and their values.
// console.log(tinderUser);

//object inside object
const regularUser = {
    email : "some@gamil.com",
    fullName : {                  //further object inside sub object 
        userName : {
            firstName : "hitesh",
            lastName : "choudhary"
        }
    } 
}
//to access inside object
console.log(regularUser.fullName?.userName.firstName);
//what is "?" here ?       //will use them in furture   
//it is used to know that whether the fullName exist or not if exist then go further.
//it makes the synatx shorter && like provide protection .


//Combining objects into single OBJECT
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

//const obj3 = {obj1 , obj2}
//this will make the 2 objects inside one object.          //same prob as in object

const obj3 = Object.assign({}, obj1 , obj2) 
//why {} ? it is empty object .
//this is optional and this is done in production level.

//even Object.assign will be used less.
const obj4 = {...obj1 , ...obj2}          //spread operator
//same as the array
//console.log(obj4)     //to check

//Array Object
const users = [
   {
        id : 1,
        email : "h@gmail.com"
   },
   {
        id : 2,
        email : "h@gmail.com"
   },
   {
        id : 3,
        email : "h@gmail.com"
   } 
]
//there is key that is provided . (0 , 1 ,2)  to make access
users[1].email  //syntax to access.

console.log(tinderUser);
console.log(Object.keys(tinderUser));       //will get keys in array
console.log(Object.values(tinderUser));     //will get values in array
console.log(Object.entries(tinderUser));    //will array and inside there will be arrays with each having first element as key and second element as value.
//keys and values methods will be used highly.

console.log(tinderUser.hasOwnProperty('isLogged')) //return boolean 
//returns on basis that object owns that property or not.


//Object object needs more discussion . (menu krna pena )
//vase keha es ne agge krva ga ... menu ve krna pena


