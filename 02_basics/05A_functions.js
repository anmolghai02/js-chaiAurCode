//rest operator : same symbol as spread operator  but here it will be called rest operator
function calculateCartPrice(...num1){
    return num1
}
//useCase : in cart we don't know amount there will be -> random amount is.  

console.log(calculateCartPrice(200,400,500))
//o/p : will be array [200,400,500]
//if paramter was (var1 , ...num) then o/p : [400,500]

//Function and object
const user = {
    username : "hitesh",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

handleObject({            //we can directly pass the object (like given)
    username : "sam",
    price : 399
})

//there is no type checking in js (we have to use if-else) 
//for this reason people use typescript

//Function and array
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500,1000]))
