//destructuring of objects

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}
course.courseInstructor //this is very long to make code clean
//use the destructor
//syntax 
// const {courseInstructor} = course   //now we can only use word courseInstructor
//console.log(courseInstructor);
//to provide the name
const {courseInstructor : instructor} = course
console.log(instructor);

//destructuring will be used in the react -> will not be taught there.
//when ever you see the {company} -> think destructing
//eg const navbar = ({company}) =>  { 
//} 

//also destructing of arrays can be done but rarely done.



//JSON API (brief)
//api's return in the JSON.
// {              //no name
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price" : "free" 
// }                            //this is JSON  (keys are in string)
//JSON(js object notation)
//api's are things we are not doing others are doing. we don't care.
//values that come from backend. Before, it use to come in XML. know JS.
//all api's wherever are sent in the JSON.

//api can also be recived in Array Format
//array de andr object
[ 
    {},
    {},
    {}
]
//JSON is not limited to the JS all api are done by this.

//more in future video