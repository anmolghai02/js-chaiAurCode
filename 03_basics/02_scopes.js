//scope is {} (object declaration toh alava)          
//it all start with let , const & var.
var c = 300     //value will get changed.
let a = 300    //global scope
if(true){
    let a = 10  //block scope
    const b = 20
    var c = 30
    //or just c = 30
    console.log("Inner a: ",a);  //o/p : 30
}

// console.log(a)       //error - no scope   //when global a was not added
// console.log(b)       //error - no scope
console.log(c)          //valid - var/nothing has scope here.
                                //that's why people avoid using it.
console.log("outer a: ",a);  //o/p : 300

//global scope in IDE with node and in console -> are different.


//nested scope
function one(){     //nested function
    const username = "hitesh"
    function two(){
        const website = "utube"
        console.log(username);        //valid scope
    }
    // console.log(website);           //invalid out-of-scope
    two();
}
one();

//********INTERESTING ******/   //lil about hoisting
function addone(num){
    return num+1
}
addone(5)           //if this call is above the function declaration -> still it will work                   

//we are holding the function in the variable.
const addTwo = function(num){       //this is expression (function te hega he va)
    return num+2; 
}
addTwo(5)              //see variable de nal va
//if this call is declared above the function declaration -> it will not work .
//error of no access before instiallization will come.

//The concept that where function is stored , how declared , their execution context , 
//varaible treatment , tree made by JS for varaible and function is called hoisting.