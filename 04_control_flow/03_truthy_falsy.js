//BASIC : could be asked in interview

//some things are taken as the truth and some as false.
// const userEmail = "h@hitesh.ai"  //-> this is taken as TRUE 
// const userEmail = ""                // taken as false
const userEmail = []            //taken as true

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email")
}
//Notes :
//falsy Values : (those who are taken as false)
    // false , 0 , -0(just for interview) ,BigInt 0n , ""  , null , undefined , NaN
//truthy values : 
    // true , "0" , 'false'(or"" vich) , " " , [] , {} , function(){} (empty function) , 
//so 0 == false , etc true va


//Empty Object checking way
const emptyObj = {}
//Object.keys(emptyObj) -> returns array of keys
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}



//Nullish Coalescing Operator (??) : null undefined                     //USEFULL 

// it is new operator , only made for null and undefined .
//it is used to assign value but avoid if they are null and undefined -> in that case preceding value will be assigned. 

let val1 ;
// val1 = 5 ?? 10   //if console.log -> o/p : 5
// val1 = null ?? 10                //o/p : 10
// val1 = undefined ?? 15           //o/p : 15
val1 = null ?? 10 ?? 20             //o/p : 10

//it takes first value which is not null and undefined.

//Use case : let function return diff value -> but to avoid taking value that are null and undefined. 

//TERNIARY OPERATOR
//conditon ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("lesss than 80") : console.log("more than 80")


