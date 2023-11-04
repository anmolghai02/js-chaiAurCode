//SYNTAX
// switch (key) {
//     case value :

//         break;
    
//     default :
//         break;
// }

const month = 1
switch(month){
    case 1 :
        console.log("JAN");
        // break;
    case 2 :
        console.log("Feb");
        break;
    case 3 :
        console.log("March");
        break;
    default :
        console.log("Invalid");
        break;
}

//Why Break?
//if case is match , then after that all cases will execute. 
//in above code o/p : JAN then Feb but at feb there will be break so stopped . Else it would not.

//Cases in String dataType
switch("march"){
    case "Jan" :
        console.log("January");
        break;
    case "Feb" :
        console.log("Feburary");
        break;
    default :
        console.log("Defualt");
        break;
} 
