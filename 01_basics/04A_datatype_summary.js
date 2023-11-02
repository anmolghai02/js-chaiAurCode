//Primitive
let myyoutubename = "hiteshchoudhary"

let anothername =  myyoutubename
//here myyoutubename de copy agye.
//original nai anda.
anothername = "chaiaurcode"

//now value in myyoutubename is still "hiteshchoudhary"
//in anothername var -> value is "chaiaurcode"
console.log(myyoutubename);
console.log(anothername);

//NON PRIMITIVE
let user1 = {
    name : anmol ,
}

let user2 = user1

user2.name = "hitesh"
//both user1 and user2 was pointing to same in the heap.
//so value changed in one gets reflected in other.
console.log(user1.name);
console.log(user2.name);
