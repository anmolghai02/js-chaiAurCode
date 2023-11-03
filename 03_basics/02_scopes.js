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



