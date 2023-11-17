//Immediately Invoked Function Expressions (IIFE)

//with Iffe functions you have to use the ";". 
//to end the code run.

//named IFFE
(function chai(){
    console.log(`DB connected`)
})();    //second () nal execution hogye
//first () will make the function IIFE means imediatly invoke function

//this is normal/unnamed IFFE
( (name) => {
    console.log(`DB connected 2 ${name}`)
})('hitesh');     //with argument also.

//parameterized IFFE .(upper vich he deta)





