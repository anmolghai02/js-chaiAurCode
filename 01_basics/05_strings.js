//in js string can be declared by both '' and ""

//concatenate
const name = "hitesh"
const repoCount = 50

// console.log(name+repoCount+" value");
//not used in modern code

//other syntax
console.log(name,"hello*****",repoCount);  //no need to put the space as it automatically provides

//New SYNTAX       (highly used in back-end)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// ` are called back ticks

//behind the sceen ,above String invokes object .

//String OBJECT: 
const gameName = new String('hitesh-hc')         //S capital
//in string  , there is key and values . eg) 0th = h , 1st = i , etc
//(this is not array, this is object.) (like after seeing 0th = h )
console.log(gameName[0])    //to access using key-value pair.
console.log(gameName.__proto__);   //to access prototype  -> o/p : {}   (empty braces) (empty object)
//what is prototype ?
//String object inherites the Prototype object.  (all objects inherite Prototype)

//METHODS of string      (11 Methods)    
        //methods can be also used with const st = "hitesh"
//it gets it's methods from the prototype object.
//you don't need to use varName.__proto__.length  -> u can directly varName.length
console.log(gameName.length);         //length() error 
console.log(gameName.toLowerCase());  //whole to lower case
console.log(gameName.toUpperCase());
//as the String is primitive DT : original is not changed.
console.log(gameName)  //for checking
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))

const tempString = gameName.substring(0,4)    //same as java's .
console.log(tempString)

//.slice() in array also 
const anotherString = gameName.slice(-8,4)    //in this Method , we can provide the -ve values it will provide reverse .
console.log(anotherString)   //o/p : ite

const string1 = "   hitesh  "     //here i don't want the spaces
console.log(string1.trim()); //it does from both sides.

const url = "http:\\hiteshchoudhary.com\hitesh%20choudhary"
console.log(url.replace('%20','-'));    //replace
console.log(url.includes('hitesh'))      // returns boolean

console.log(gameName.split('-')) //splits the string on the basis of '-' .