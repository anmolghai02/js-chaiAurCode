// loop for the object iteration

//for this -> we will not use for of loop BUT for in loop

//for in -> works with Objects and Array BUT not maps 

const myObj = {
    cpp : "c++",
    rb : "ruby",
    js : "javaScript"
}

for(const key in myObj){
    console.log(myObj[key]);
}


//with array
const programming = ["js" , "rb" , "java"]
for(const key in programming){
    console.log(programming[key])
}


//with Map
const map = new Map()
map.set('in',"india");
map.set('usa',"united state america");
map.set("fr","france");
map.set('in',"india")

for(const key in map){
    console.log(key);      //o/p : nothing BCZ map are not iteratible
}
