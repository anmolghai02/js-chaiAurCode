//using date API is difficult
//currently TC39 organisation , working on Temporal API to replace Data API.
//currently it is just a proporsal .

//the Date in js , starts from jan/1/1970 

let myDate = new Date()    //instance of Date
        //all below are different representation ways
console.log(myDate.toString());            //basic
console.log(myDate.toDateString());        //only date
console.log(myDate.toLocaleString());       // date then time (simple)
// console.log(myDate.toISOString())
// console.log(myDate.toTimeString())       //only time

//type of Date =  object.
console.log(typeof myDate)

let myCreatedDate = new Date(2023 , 0 , 23)   //month's start from 0 ie january  (else is regular)
console.log(myCreatedDate.toDateString());    //o/p : Mon Jan 23 2023

myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3)   //we inputing the time too.
console.log(myCreatedDate.toLocaleDateString()); //o/p : 23/1/2023(jan va) local standard nal.
                        //.toLocaleString() nal o/p : 1/23/2023(jan va) , 5:03:00 AM

//if you want to insert in yyyy-mm-dd
myCreatedDate = new Date("2023-01-14");
//for dd-mm-yyyy
myCreatedDate = new Date("01-14-2023");

//TIME STAMPS
    //used in  quizes , polls , fastest winner applications.
let myTimeStamp  = Date.now();
console.log(myTimeStamp);      //provides the millisecond from jan 1970               //i belive value is wrong
console.log(myCreatedDate.getTime())    //provides the millisecond from jan 1970 to 1/14/2023(myCreatedDate)

//in seconds rather than milliseconds
console.log(Math.floor(Date.now()/1000)) 
//Math.floor or Math.round to avoid answer in decimal.

let newDate = new Date()
console.log(newDate.getTime()+1)
console.log(newDate.getMonth())
console.log(newDate.getDay())
//gets the paticular thing and can use the operators with them.
//eg) `${newDate.getDay()} and the time is ${newDate.getTime}`

//(IMP)  toLocaleString Method      (used in many places.)
newDate.toLocaleString('default',{          //default -> is default internationalization
  weekday: "long"                  //this is object -> for customization of format on your own
})