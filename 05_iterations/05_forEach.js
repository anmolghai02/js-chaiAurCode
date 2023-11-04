//for each loop is highly used for ARRAYS

const coding = ["js" , 'ruby' , 'java' , 'cpp']

//in forEach we have to provide the callBackFunction or arrow function or printMe function
coding.forEach(function (element) {
    console.log(element)
} )

//other syntax using arrow function
coding.forEach( (element) => {
    console.log(element)
})


//using outside function
function printMe(item){
    console.log(item)
}
coding.forEach(printMe); //only reference not the execution



//we can also have index and array 
coding.forEach( (item , index , arr) =>{         //arr means the array and index means the index of array
    console.log(item , index , arr);
})



//IMP
//For Each on Array with Object elements      -> useful in DB
const myCoding = [
    {
        languageName : 'javaScript',
        languageFile : 'js'
    },
    {
        languageName : 'java',
        languageFile : 'java'
    },
    {
        languageName : 'python',
        languageFile : 'py'
    }
]

myCoding.forEach((element)=>{
    console.log(element.languageName)
})


