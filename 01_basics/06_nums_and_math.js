const score = 400
console.log(score) 

//but u want that var is number not other DT -> use new keyword
const balance = new Number(100)
console.log(balance)

//diff in console.log(score) and (balance) :: for score only value but for balance it is [Number: 100] which shows that it is 100% number.  

//Mehtod of Number ::       it also inherties the properties of Prototype.
console.log(balance.toString().length)
console.log(balance.toFixed(2)) //to provide the decimal precision. //0 means 100 , 1 means 100.0 , so on.
                //returns string.
const otherNum = 23.896
console.log(otherNum.toPrecision(3))     //it will return the number to a specified length 
                                        //a decimal point and nulls are added(if need) to create specified length
                //returns string
//for above o/p will be 23.9 last vala round off
//for 123.8966 -> o/p : 124   (with precision 3 )
//for 1123.8966 -> o/p : 1.12e+3 (with precision 3) -> phele 3 precision de te and baaki exponential deta.
                                    //use carefully
const hundreds = 1000000
console.log(hundreds.toLocaleString())  //used for representation like 1,000,000   in US format (defaultone)
//for indian format : 10,00,000
console.log(hundreds.toLocaleString('en-IN'))   

console.log(Number.MAX_VALUE);
Number.MIN_VALUE;
Number.MAX_SAFE_INTEGER ;      //max safe value
Number.MIN_SAFE_INTEGER ;


//*****************MATHS ********** */
//M of Math is capital
//Math object provides the properties and methods like in java. 
console.log(Math.PI)
console.log(Math.abs(-4))    //4
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.6))  //5  upper vala 
console.log(Math.floor(4.9)) //4  neeche vala
console.log(Math.sqrt(4))   //16
Math.pow(3,3)      //27
Math.min(4,3,6,9); //3
Math.max(5,1,2,8) //8

//most used
console.log(Math.random()) //values b/w 0 to 1
console.log(Math.random()*10) //vaues b/w 0 to 10

const min = 10
const max = 20

console.log(  Math.floor(Math.random() * (max-min+1))   +     min)
//here value b/w 10 to 20 provided.
//explanation : Math.random() * (max-min+1) , here max-min to define range and +1 so that don't go to 0 
            //then Math.floor -> to remove the decimal.
            // + min -> to start from the min value.

