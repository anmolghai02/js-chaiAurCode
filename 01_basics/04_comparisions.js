//COMPARISIONS OF DIFFERNET DATATYPES           -> converison's will happen 
//here conversion happens
console.log("2">1); //o/p true
//here the js has converted to STRING to NUMBER
console.log("2a">1);   //o/p false
//here 2a was converted to the NaN which not comparible  

//for this unliked data comparison problem & other functions, People started to use extended version of js called TypeScript.

console.log(null > 0); //false
console.log(null >= 0);//true   //both converts null to 0
console.log(null == 0);//false          //null ->converted to 0 -> But == false -> CUZ it works different from comparisions 
//Reason : equality check == and comparision >,<,>=,<= works differently .
//comparisions convert null to number ,treating it as 0.
//in equality it is different.
//so when null is 0 in comparisons.

//Remember the comparisions and equality works different.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);
//here all are false.


//strict check : === , it checks with datatype .    (no dataType conversion)

//try to avoid comparisions of  null and undefined :: so that the predicitve output comes.



