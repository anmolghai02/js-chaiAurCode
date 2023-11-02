//in js string can be declared by both '' and ""

//concatenate
const name = "hitesh"
const repoCount = 50

// console.log(name+repoCount+" value");
//this is not used in modern code

//New SYNTAX       (even used in back end)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//behind the sceen ,above String works as object .

//String OBJECT: 
const gameName = new String('hitesh-hc')         //S capital
//in string  , there is key and values . eg) 0th = h , 1st = i , etc
//(this is not array , this is object.) 
console.log(gameName[0])    //to access key-value pair.
console.log(gameName.__proto__);   //to access prototype 
//what is prototype ?
//String object inherites the Prototype object.

//METHODS of string         
        //methods can be also used with const st = "hitesh"
//it gets it's methods from the prototype object.
//you don't need to use varName.__proto__.length  -> u can directly varName.length
console.log(gameName.length);         //length nal () nai.
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
//as the String is primitive DT : original is not changed.
console.log(gameName)  //to check
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))

const tempString = gameName.substring(0,4)    //same as java's .
console.log(tempString)

const anotherString = gameName.slice(-8,4)    //in this Method , we can provide the -ve values it will provide reverse .
console.log(anotherString)

const string1 = "   hitesh  "     //here i don't want the spaces
console.log(string1.trim()); //it does from both sides.

const url = "http:\\hiteshchoudhary.com\hitesh%20choudhary"
console.log(url.replace('%20','-'));    //replace
console.log(url.includes('hitesh'))      // provides boolean

console.log(gameName.split('-')) //this is split the string on the basis of '-'