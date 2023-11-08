const marvel_Heros = ["thor" ,"ironman" , "spiderman"]
const dc_Heros = ["superman", "flash" , "batman"]

// marvel_Heros.push(dc_Heros)   //by this array gets stored at end =>> means last element Array va
// console.log(marvel_Heros)

const allHeros = marvel_Heros.concat(dc_Heros)   //now dc_Heros get stored at the end of the Marvel_Heros
//but this returns new array  
// console.log(marvel_Heros)    //this is same as original. 
console.log(allHeros)

//Other simpler SYNTAX   -> spread operator
const all_New_Heros = [...marvel_Heros , ...dc_Heros]
//ek array vich

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)    //returns new array with all inside array are concatenated . 
                                    //Infinity is depth upto which we want to concatenate
console.log(real_another_array)

console.log(Array.isArray("hitesh"));   //Array.isArray() returns boolean.    //is parameter array?
console.log(Array.from("Hitesh"))  //o/p : ['H','i','t' , e , s , h]
console.log(Array.from({name : "hitesh"}))  //o/p : [] empty array    (interview) 
                        //object is unconvertable to array.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 , score3))     //returns new array from set of elements


