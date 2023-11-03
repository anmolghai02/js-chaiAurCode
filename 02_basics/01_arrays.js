//array

const myArr = [0,1,2,3,4,5 ]
//in js ,  the elements can be of different dataTypes.
const myaar2 = [[0,2 ,4 ,4] , true , "hitesh"]   //valid

//Array object enables storing collection of multiple items under a single variable name.
//JS's array are resizable and can be mix of diff DT
//JS array-copy operations create shallow copies. (a shallow copy of an object is a copy whose properties share the same references)
            //deep copy who don't share same reference
    //means reference send hunda in shallow copies.
//prototype de age ve prototype (just remember for now)

console.log(myArr[0])

//Array Methods
myArr.push(6)  //adds element at end

myArr.pop()    //removes element at last

myArr.unshift(0)    //by this value is added at front , baaki next te shift ho jnde.
myArr.shift() //front vala removed

console.log(myArr.includes(9)) //return boolean
console.log(myArr.indexOf(9))  //return int , -1 if element doesn't exist.

const newArr = myArr.join()     //adds all elements into string. there is comma's in-between.
    //it converts to the string and comma separated.

//Slice , Splice
//splice make changes in original array. slice don't. 
//and splice include last one.
console.log("A",myArr);

const my1 = myArr.slice(1,3)                    //in string also
console.log(my1);           //[1,2]
console.log("B",myArr);    // B [0 ,1 ,2 ,3 ,4 ,5]

const my2 = myArr.splice(1,3)
console.log(my2);           //[1,2,3]           //last also included 
console.log("C",myArr);     //C [0 ,4 ,5]       //original also changed


 


