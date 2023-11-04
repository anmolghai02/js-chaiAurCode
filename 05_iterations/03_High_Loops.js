//Topic : High order array loops
/*
*  for of
*  for each
*   

*/

//for of
const arr = [1,2,3,4,5]
for(const i of arr ){
    console.log(i);
}

const greeting = "Hello World"              //with Strings
for(const greet of greeting){
    console.log(greet);
}



//Maps                            -> built-in object 
    //only unique values and stored in order
const map = new Map()
map.set('in',"india");
map.set('usa',"united state america");
map.set("fr","france");
map.set('in',"india")

console.log(map)

for(const key of map){
    console.log(key);       //key and value ave ga sara 
}

//destructuring
for(const [key , value] of map){
    console.log(key , ':-' , value)     //now key and value can be accessed separately
}


//for of loop with object       ->   not possible
const myObj = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

// for( const [key,value] of myObj){
//     console.log(key , value)
// }                        //objects are not iteratible

